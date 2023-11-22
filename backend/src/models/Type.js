
const { DataTypes } = require('sequelize')
const database = require('../../db')

module.exports = (database) =>{
    database.define("Type",{
        ID:{
            type:DataTypes.INTEGER,
            unique:true,
            primaryKey:true,
            allowNull:false
        },
        type:{
            type:DataTypes.INTEGER,
            unique:true,
            allowNull:false
        },
    },
    )
}