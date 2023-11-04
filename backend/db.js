
require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD} = process.env

const { Sequelize,DataTypes } = require('sequelize')
const Pokemonsfunction = require('./src/models/Pokemons')
const Typefunction = require('./src/models/Type')
const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
    {logging:false}
);
Pokemonsfunction(database)
Typefunction(database)
const { Pokemon, Type } = database.models
Pokemon.belongsToMany(Type,{through:"PokemonType"})
Type.belongsToMany(Pokemon,{through:"PokemonType"})




module.exports = {
    database,
...database.models};