
const server = require('./src/server')
const PORT = 3001
const {database} = require('./db')

database.sync({force:true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`el servidor corre en puerto, ${PORT}`)
    }) 
})
