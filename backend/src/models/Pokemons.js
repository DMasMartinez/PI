const { DataTypes } = require('sequelize')
const database = require('../../db')

module.exports = (database) =>{
    database.define("Pokemon",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        Nombre:{
            type:DataTypes.STRING,
            allowNull:false
            
        },
        Imagen:{
            type:DataTypes.STRING,
            allowNull: false,
         
        },
        Vida:{
            type:DataTypes.INTEGER,
            allowNull: false,
            
        },
        Ataque:{
            type:DataTypes.INTEGER,
            allowNull: false,
            
        },
        Defensa:{
            type:DataTypes.INTEGER,
            allowNull: false,
            
        },
        Velocidad:{
            type:DataTypes.INTEGER
        },
        Altura:{
            type:DataTypes.INTEGER
        },
        Peso:{
            type:DataTypes.INTEGER
        },
    },
    )
}
