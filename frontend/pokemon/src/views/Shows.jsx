import { useEffect, useState } from "react"

function Showpokemons(){
    const lista = [{"nombre":"Daniel","apellido":"Martinez"},{"nombre":"Jorge","apellido":"Martinez"}]
    const [datos,setDatos] = useState([])
    const [tipos,setTipos] = useState([])
    useEffect(()=>{

        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res=>res.json())
            .then(data=>setDatos(data.results))
    },[])
    useEffect(()=>{
        datos.forEach((element)=>setTipos([...tipos,element.url]))
    },[tipos])
    console.log(tipos)
    return (
        <div>
            {datos.map((user)=> user.name)}
        </div>
    )
}
// aqui probamos lo de agrupar usando for loop y fetch y usaremos force update
export default Showpokemons