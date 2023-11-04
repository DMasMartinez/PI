
const {Pokemon} = require('../../../../db')

const postpokemon =async ({ id, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso}) =>{
    const newpokemon = await Pokemon.create({ id, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso})
    return newpokemon
}
module.exports = postpokemon