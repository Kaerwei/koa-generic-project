const { Sequelize } = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB } = require('../config/dotenv.config');

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("数据库连接成功!");
}).catch(() => {
    console.log("数据库连接失败!");
})

module.exports = sequelize;