const {DataTypes} = require('sequelize');
const DB = require('../util/DB');

const TodoModel = DB.define('todos', {
    todo_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    todo_title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    todo_desc : {
        type : DataTypes.STRING,
        allowNull : true
    },
    todo_departure : {
        type : DataTypes.DATE,
        allowNull : false
    },
    todo_date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    todo_add_items : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = TodoModel;