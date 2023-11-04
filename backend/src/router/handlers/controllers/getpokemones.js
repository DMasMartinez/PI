const { Pokemon } = require('../../../../db')

const getpokemones = async(query)=>{
    const show = await Pokemon.findAll({
        where : query,
    })
    return show
}

module.exports = getpokemones;