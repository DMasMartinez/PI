import { useEffect, useState } from "react"
import Pokecar from "./Pokecar"
function PokemonList(props){
    // const [lista,setLista] = useState([])
    // const [pokemons,setPokemons] = useState({
    //     lista:[],
    //     count:0
    // })
    // const listapoke = []
    // const Listapokemon = () =>{
    //     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
    //         .then(res =>res.json())
    //         .then(data=>setLista(data.results))   
    // }
    
    // // for (const val in lista){
    // //     setPokemons([...pokemons,val.url])
    // // }
    // function pokemonsby1(){
    //     Listapokemon()
    //     const names = lista.map((pokemon=>pokemon.name))
    //     for (const name in names){
    //         fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //             .then(res=>res.json())
    //             .then(data=>setPokemons({...pokemons,lista:[...pokemons.lista,data],count:pokemons.count+1}))
    //     }
    // }
    // useEffect(()=>{
    //     if (pokemons.count===0){
    //         pokemonsby1()
    //     }else{
    //         return
    //     }
        
    // },[pokemons.count])
    
    // console.log(pokemons.lista)
    useEffect(()=>{
        props.showpokemons()
    },[])
    
    return (
        <div>
            {props.loading===true?(<h2>Loading...</h2>):(
                props.pokemonlist.map((pokemon)=>{
                    return(
                        <Pokecar
                            name = {pokemon.name}
                            height = {pokemon.height}             
                            weight = {pokemon.weight}
                            type = {pokemon.types[0].type.name}
                            imagen = {pokemon.sprites.front_default}
                        />
                    )
                })
            )}
        </div>
    )


}


export default PokemonList