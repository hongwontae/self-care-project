const DB = require('../util/DB');
const {DataTypes} = require('sequelize');

const WotModel = DB.define('way_of_thinking', {
    wotId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    wotLine : {
        type : DataTypes.STRING,
        allowNull : false
    },
    highlight : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
})

module.exports = WotModel;