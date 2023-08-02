const fs = require('fs');
const path = require('path');

const Router = require('koa-router');

const routers = [];
let index = 1;
fs.readdirSync(__dirname).forEach(dir => {
    if (dir !== 'index.js') {
        let router = new Router();
        fs.readdirSync(path.resolve(__dirname, dir)).forEach(file => {
            let r = require(path.resolve(__dirname, dir, file));
            router.use(r.routes());
        });
        routers['v' + index] = router;
        index++;
    }
});


module.exports = routers;

