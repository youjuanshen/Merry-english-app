/**
 * Firebase 与 LocalStorage 双引擎同步适配器
 * 自动识别是否配置了 Firebase，以实现真实的多设备手机互联
 */

const firebaseConfig = {
    // 🔥 TO USER: 在这里填入你在 Google Firebase 控制台免费申请到的配置信息！
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let useFirebase = false;
let db = null;

if (firebaseConfig.apiKey !== "YOUR_API_KEY" && typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    useFirebase = true;
    console.log("🔥 Firebase Sync Engine: Activated.");
} else {
    console.warn("⚠️ Firebase configs not set! Falling back to localStorage Sync Engine.");
    console.warn("To enable multi-device iPhone communication, please configure firebaseConfig in firebase-sync.js");
}

const Sync = {
    /** 
     * 监听教师发布的控制指令
     */
    listenTeacherCommand: (callback) => {
        if (useFirebase) {
            db.ref('teacherCommand').on('value', snapshot => {
                const val = snapshot.val();
                if (val) callback(val);
            });
        } else {
            // LocalStorage Fallback (original polling)
            let lastCommandHash = '';
            setInterval(() => {
                const cmdStr = localStorage.getItem('teacherCommand');
                if (cmdStr && cmdStr !== lastCommandHash) {
                    try {
                        const cmd = JSON.parse(cmdStr);
                        lastCommandHash = cmdStr;
                        callback(cmd);
                    } catch(e) {}
                }
            }, 1000);
        }
    },

    /**
     * 教师派发游戏控制指令
     */
    sendTeacherCommand: (cmdObj) => {
        if (useFirebase) {
            db.ref('teacherCommand').set(cmdObj);
        } else {
            localStorage.setItem('teacherCommand', JSON.stringify(cmdObj));
        }
    },

    /**
     * 同步当前课程 (Current Lesson)
     */
    setCurrentLesson: (lessonObj) => {
        if (useFirebase) {
            db.ref('currentLesson').set(lessonObj);
        } else {
            localStorage.setItem('currentLesson', JSON.stringify(lessonObj));
        }
    },
    
    getCurrentLessonOnce: async () => {
        if (useFirebase) {
            const snap = await db.ref('currentLesson').once('value');
            return snap.val();
        } else {
            const str = localStorage.getItem('currentLesson');
            if(str) return JSON.parse(str);
            return null;
        }
    },

    /**
     * 同步作业检查结果
     */
    saveHomeworkCheck: (key, data) => {
        if (useFirebase) {
            db.ref('homeworkRecords/' + key).set(data);
        } else {
            const currentObj = JSON.parse(localStorage.getItem('homeworkRecords') || '{}');
            currentObj[key] = data;
            localStorage.setItem('homeworkRecords', JSON.stringify(currentObj));
        }
    },

    getHomeworkRecordsOnce: async () => {
        if (useFirebase) {
            const snap = await db.ref('homeworkRecords').once('value');
            return snap.val() || {};
        } else {
            return JSON.parse(localStorage.getItem('homeworkRecords') || '{}');
        }
    },

    /**
     * 进度统计汇总上报
     */
    setDashboardData: (key, data) => {
        if (useFirebase) {
            db.ref('dashboard/' + key).set(data);
        } else {
            localStorage.setItem(key, JSON.stringify(data));
        }
    },
    
    getDashboardDataOnce: async (key) => {
        if (useFirebase) {
            const snap = await db.ref('dashboard/' + key).once('value');
            return snap.val();
        } else {
            return JSON.parse(localStorage.getItem(key) || 'null');
        }
    }
};

window.Sync = Sync;
