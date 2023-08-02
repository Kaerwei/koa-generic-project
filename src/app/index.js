const Koa = require('koa');
const { koaBody } = require('koa-body');
const mount = require('koa-mount');

const routers = require('../router');
const { logger } = require('./extension/logger.extension');
const { loggerHandler, errorHandler } = require('../middleware/app.middleware');
const { onSuccess, onError } = require('./extension/response.extension');


const app = new Koa();
// 功能添加
app.context.logger = logger; // 日志处理
app.context.success = onSuccess;
app.context.error = onError;

app.use(errorHandler());
app.use(loggerHandler());
app.use(koaBody({
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
}));

// 路由处理
Object.keys(routers).forEach(router => {
    let vApp = new Koa();
    vApp.use(routers[router].routes());
    app.use(mount('/api/' + router, vApp));
})

module.exports = app;