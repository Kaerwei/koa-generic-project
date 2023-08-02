const { errorLogger } = require("../app/extension/logger.extension");
const { serverError } = require("../constant/error.types");

const loggerHandler = () => async (ctx, next) => {
    ctx.logger.info('请求方式:', ctx.method, ctx.url);
    await next();
}

const errorHandler = () => async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        const _error = errorToJSON(error);
        const { data, ...otherProps } = _error;

        ctx.status = otherProps.status || 500;
        if (data) {
            delete data.status;
            ctx.body = data;
        } else {
            serverError.message = otherProps.message;
            errorLogger.error(otherProps);
            ctx.body = serverError;
        }
    }
}

function errorToJSON(error) {
    if (!(error instanceof Error)) {
        throw new Error('errorToJSON方法只适用于Error对象');
    }

    // 提取Error对象的属性
    const { name, message, stack, ...otherProps } = error;

    // 组织为JSON对象
    const jsonError = {
        name: String(name || 'Error'),
        message: String(message || ''),
        stack: stack ? stack.split('\n').map(line => line.trim()) : [],
        ...otherProps,
    };

    return jsonError;
}
module.exports = {
    loggerHandler,
    errorHandler
}