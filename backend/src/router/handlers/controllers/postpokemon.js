
const {Pokemon} = require('../../../../db')

const postpokemon =async ({ id, name, image, health, atack, defense, velocity, height, weight}) =>{
    const newpokemon = await Pokemon.create({ id, name, image, health, atack, defense, velocity, height, weight})
    return newpokemon
}
module.exports = postpokemon