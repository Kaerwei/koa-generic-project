const Router = require('koa-router');
const { userValidError } = require('../../constant/error.types');
const router = new Router({ prefix: '/user' });

router.get('/register', (ctx, next) => {
    ctx.error(userValidError);
})

module.exports = router;