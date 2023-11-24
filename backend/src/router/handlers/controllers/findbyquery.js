const { Pokemon, Type } = require('../../../../db')
const objectformapitosee = require('../helpers/objectfromapitosee')
const findbyquery = async(query)=>{
    const show = await Pokemon.findOne({where : query})
    if (show!==null){
        // const poketype = show.dataValues.Types.map((type)=>type.type)
        // show.dataValues.types = poketype

        return show.dataValues
    }
    const pokemonbyname = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.name}`)
    const data = await pokemonbyname.json()
    // const {name,height,weight,health,atack,defense,velocity,image} = data
    // const {name} = pokemonbyid
    const newpoke = await Pokemon.create(objectformapitosee(data))
    return newpoke
}
module.exports = findbyquery;

// verificar lo del req y res por que en el postman muestran ese error
// catch (error) {
//     console.error(error);
//     res.status(500).json({error:'Internal Server Error'})
// }
// Vida: response.data.stats[0].base_stat,
//             Imagen: response.data.sprites.other.dream_world.front_default,
//             Ataque: response.data.stats[1].base_stat,
//             Defensa: response.data.stats[2].base_stat,
//             Velocidad: response.data.stats[5].base_stat,

// const poke = await Pokemon.create({
//     name,
//     height,
//     weight,
// })

// console.log(newresponse)

// "name": data.name,
//             "weight":data.weight,
//             "height":data.height,
//             "velocity":data.stats[5].base_stat,
//             "health":data.stats[0].base_stat,
//             "atack":data.stats[1].base_stat,
//             "defense":data.stats[2].base_stat,
//             "Image": data.sprites.front_default,