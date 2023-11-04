
const { Router } = require('express')
const router = Router()
const pokehandler = require('./handlers/pokehandler')


router.use("/pokemons",pokehandler)



module.exports = router;