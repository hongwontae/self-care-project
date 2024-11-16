const {Sequelize} = require('sequelize');

const DB = new Sequelize({
    dialect : 'mysql',
    database : 'project_2_todo',
    username : 'root',
    password : 'YourRootPassword',
    host : 'localhost'
})

module.exports = DB;