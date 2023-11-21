
const { Router } = require('express')

const pokehandler = Router()
const findbyquery = require('./controllers/findbyquery')
const postpokemon = require('./controllers/postpokemon')
const findpokemonbyid = require('./controllers/findpokemonbyid')
const getpokemones = require('./controllers/getpokemones')
// pokehandler.get('/',async(req,res)=>{
//     try{
//         const getpokes = await getpokemones()
//         res.status(200).json(getpokes)
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
    
// })

pokehandler.get('/:idPokemon', async(req,res)=>{//// casi funciona
    try{
        const {idPokemon} = req.params;
        const getpokemon = await findpokemonbyid(idPokemon)
        res.status(200).json(getpokemon)
        console.log(req.params)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    

})

pokehandler.post('/', async(req,res)=>{
    try{
        const { id, name, image, health, atack, defense, velocity, height, weight} = req.body
        const subirpokemon = await postpokemon({ id, name, image, health, atack, defense, velocity, height, weight})
        res.status(200).json(subirpokemon)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})


pokehandler.get('/',async(req,res)=>{
    try{
        const {name}=req.query;
        const Pokes = name?(await findbyquery({name})):(await getpokemones())
        res.status(200).json(Pokes)
        console.log({name})
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

pokehandler.post('/types',(req,res)=>{

})

module.exports = pokehandler;