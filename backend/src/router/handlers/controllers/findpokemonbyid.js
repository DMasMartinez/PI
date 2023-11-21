
const {Pokemon,Type} = require('../../../../db')
const objectfromapitosee = require('../helpers/objectfromapitosee')
const findpokemonbyid = async(id) =>{
    const poke = await Pokemon.findByPk(id,{
        include:{
            model:Type,
            attributes:["Type"],
            through:{
                attributes:[]
            }
        }
    })
    if (poke!==null){
        return poke.dataValues
    }
    const pokemonbyid = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await pokemonbyid.json()
    // const {name,height,weight,health,atack,defense,velocity,image} = data
    // const {name} = pokemonbyid
    const newpoke = await Pokemon.create(objectfromapitosee(data))
    return newpoke
}

module.exports = findpokemonbyid;