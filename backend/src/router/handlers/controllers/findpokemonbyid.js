
const {Pokemon} = require('../../../../db')

const findpokemonbyid = async(id) =>{
    const poke = await Pokemon.findByPk(id)
    return poke
}

module.exports = findpokemonbyid;