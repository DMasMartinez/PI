
const {Pokemon} = require('../../../../db')

const getpokemones = (query) =>{
    const pokes = Pokemon.findAll({
        where: query
    })
    return pokes
}

module.exports =getpokemones;



// const {Pokemon} = require('../../../../db')
// const findqueryname = async(name) =>{
//     let poke = await Pokemon.findAll({
//         where:{name:name}
//     })
//     if (poke&&poke.length>0){
//         return poke[0].dataValues
//     }
        
    
        
//     const pokebyname = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     const data = await pokebyname.json()
//     const {weight,height} = data
//     const newpoke = await Pokemon.create({name,weight,height})
//     return newpoke
        
    
    
// }

// module.exports =findqueryname;

// Nombre: response.data.name,
//                 Vida: response.data.stats[0].base_stat,
//                 Imagen: response.data.sprites.other.dream_world.front_default,
//                 Ataque: response.data.stats[1].base_stat,
//                 Defensa: response.data.stats[2].base_stat,
//                 Velocidad: response.data.stats[5].base_stat,
//                 Altura: response.data.height,
//                 Peso: response.data.weight