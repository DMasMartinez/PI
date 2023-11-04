
const { Router } = require('express')

const pokehandler = Router()
const getpokemones = require('./controllers/getpokemones')
const postpokemon = require('./controllers/postpokemon')
const findpokemonbyid = require('./controllers/findpokemonbyid')

// pokehandler.get('/',async(req,res)=>{
//     try{
//         const getpokes = await getpokemones()
//         res.status(200).json(getpokes)
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
    
// })

pokehandler.get('/:idPokemon', async(req,res)=>{
    try{
        const {idPokemon} = req.params;
        const getpokemon = await findpokemonbyid(idPokemon)
        res.status(200).json(getpokemon)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    

})

pokehandler.post('/', async(req,res)=>{
    try{
        const { id, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso} = req.body
        const subirpokemon = await postpokemon({ id, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso})
        res.status(200).json(subirpokemon)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})

pokehandler.get('/',async(req,res)=>{
    try{
        const {Nombre}=req.query;
        const Pokes = Nombre?(await getpokemones({Nombre})):(await getpokemones())
        res.status(200).json(Pokes)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})

pokehandler.post('/types',(req,res)=>{

})

module.exports = pokehandler;