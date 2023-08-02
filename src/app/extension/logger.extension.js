const log4js = require('log4js');

// 配置log4js
log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: 'logs/app.log' },
        errorFile: { type: 'file', filename: 'logs/error.log' } // 错误日志文件
    },
    categories: {
        default: {
            appenders: ['console', 'file'],
            level: 'debug'
        },
        error: { appenders: ['errorFile'], level: 'error' } // 设置错误日志的级别为error
    }
});

const logger = log4js.getLogger();
const errorLogger = log4js.getLogger('error');

module.exports = {
    logger,
    errorLogger
};