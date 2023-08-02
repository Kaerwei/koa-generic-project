const { DataTypes } = require('sequelize');
const sequelize = require("../../db/mysql.db");

const User = sequelize.define('koa_user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名,唯一'
    }
})

User.sync({ force: true });

module.exports = User;