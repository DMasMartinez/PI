const { DataTypes } = require('sequelize')
const database = require('../../db')

module.exports = (database) =>{
    database.define("Pokemon",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
            
            
        },
        image:{
            type:DataTypes.STRING,
            
        },
        health:{
            type:DataTypes.INTEGER,
            
        },
        atack:{
            type:DataTypes.INTEGER,
            
            
        },
        defense:{
            type:DataTypes.INTEGER,
            
        },
        velocity:{
            type:DataTypes.INTEGER
        },
        height:{
            type:DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        },
    },
    
    )
}
