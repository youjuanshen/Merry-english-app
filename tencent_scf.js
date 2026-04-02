// 腾讯云 SCF 云函数：课堂练习 App 后端
// 功能：1) 成绩提交到飞书  2) 教师指令读写
'use strict';

import https from 'https';

const LARK_APP_ID = "cli_a93bc13364f88060";
const LARK_APP_SECRET = "mJRuXzOQk9ejHdvIvFFfVbmvGycI1KdR";
const LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";

// 两个表
const TABLE_SCORES = "tbluJjXQDQ2mxjxO";   // 课堂练习成绩
const TABLE_COMMANDS = "tblK0Q5Wr1kNHeCy";  // 控制指令

function post(hostname, path, data, token) {
    return new Promise(function(resolve, reject) {
        var body = JSON.stringify(data);
        var options = {
            hostname: hostname,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };
        if (token) { options.headers['Authorization'] = 'Bearer ' + token; }
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                catch(e) { reject(new Error('JSON parse error')); }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() { req.destroy(new Error('timeout')); });
        req.write(body);
        req.end();
    });
}

function get(hostname, path, token) {
    return new Promise(function(resolve, reject) {
        var options = {
            hostname: hostname,
            path: path,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        };
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                catch(e) { reject(new Error('JSON parse error')); }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() { req.destroy(new Error('timeout')); });
        req.end();
    });
}

function del(hostname, path, token) {
    return new Promise(function(resolve, reject) {
        var options = {
            hostname: hostname,
            path: path,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        };
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                catch(e) { reject(new Error('JSON parse error')); }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() { req.destroy(new Error('timeout')); });
        req.end();
    });
}

async function getToken() {
    var tk = await post('open.feishu.cn', '/open-apis/auth/v3/tenant_access_token/internal',
        { app_id: LARK_APP_ID, app_secret: LARK_APP_SECRET }, null);
    if (!tk.tenant_access_token) throw new Error('no token: ' + JSON.stringify(tk));
    return tk.tenant_access_token;
}

// ========== 指令读写 ==========

// 查找指定 key 的记录
async function findRecord(token, key) {
    var filter = encodeURIComponent('CurrentValue.[key]="' + key + '"');
    var url = '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN +
        '/tables/' + TABLE_COMMANDS + '/records?filter=' + filter + '&page_size=1';
    var resp = await get('open.feishu.cn', url, token);
    if (resp.data && resp.data.items && resp.data.items.length > 0) {
        return resp.data.items[0];
    }
    return null;
}

// 写入指令（key-value）：有则更新，无则创建
async function setCommand(token, key, value) {
    var existing = await findRecord(token, key);
    var fields = { "key": key, "data": value };

    if (existing) {
        // 更新现有记录
        var url = '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN +
            '/tables/' + TABLE_COMMANDS + '/records/' + existing.record_id;
        // PUT request
        return new Promise(function(resolve, reject) {
            var body = JSON.stringify({ fields: fields });
            var options = {
                hostname: 'open.feishu.cn',
                path: url,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(body),
                    'Authorization': 'Bearer ' + token
                }
            };
            var req = https.request(options, function(res) {
                var chunks = [];
                res.on('data', function(chunk) { chunks.push(chunk); });
                res.on('end', function() {
                    try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                    catch(e) { reject(new Error('JSON parse error')); }
                });
            });
            req.on('error', function(e) { reject(e); });
            req.write(body);
            req.end();
        });
    } else {
        // 创建新记录
        return await post('open.feishu.cn',
            '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN + '/tables/' + TABLE_COMMANDS + '/records',
            { fields: fields }, token);
    }
}

// 读取指令
async function getCommand(token, key) {
    var record = await findRecord(token, key);
    if (record && record.fields) {
        return record.fields['data'] || null;
    }
    return null;
}

// ========== 主处理函数 ==========

export const main_handler = async (event, context) => {
    var cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors, body: '' };

    // 鉴权：防止外部刷接口
    var API_KEY = 'merry-quiz-2026-secret';
    var headers = event.headers || {};
    var authKey = headers['x-api-key'] || headers['X-Api-Key'] || '';
    if (authKey !== API_KEY) {
        return { statusCode: 403, headers: cors, body: JSON.stringify({ code: -1, msg: 'forbidden' }) };
    }

    try {
        var bodyStr = event.body || '{}';
        if (event.isBase64Encoded) bodyStr = Buffer.from(bodyStr, 'base64').toString('utf8');
        var d = JSON.parse(bodyStr);

        var token = await getToken();

        // ========== 路由 ==========

        // 1. 写入指令
        if (d.action === 'set') {
            var result = await setCommand(token, d.key, d.value);
            return { statusCode: 200, headers: cors, body: JSON.stringify({ code: 0, msg: 'ok' }) };
        }

        // 2. 读取指令
        if (d.action === 'get') {
            var value = await getCommand(token, d.key);
            return { statusCode: 200, headers: cors, body: JSON.stringify({ code: 0, data: value }) };
        }

        // 3. 提交成绩（默认）
        var fields = {
            "姓名": String(d.studentName || ''),
            "时间": Number(d.timestamp) || Date.now(),
            "考试类型": String(d.examType || ''),
            "总分": Number(d.score) || 0,
            "满分": Number(d.maxScore) || 0,
            "总正确率": Number(d.accuracy) || 0,
            "课程名称": String(d.lessonTitle || ''),
            "听力": Number(d.listeningScore) || 0,
            "阅读": Number(d.readingScore) || 0,
            "写作": Number(d.writingScore) || 0,
            "口语": Number(d.speakingScore) || 0
        };

        var result = await post('open.feishu.cn',
            '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN + '/tables/' + TABLE_SCORES + '/records',
            { fields: fields }, token);

        return { statusCode: 200, headers: cors, body: JSON.stringify(result) };

    } catch(err) {
        return {
            statusCode: 200,
            headers: cors,
            body: JSON.stringify({ code: -1, msg: err.message })
        };
    }
};
