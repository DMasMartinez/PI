import { useEffect, useState } from "react"
import Pokecar from "./Pokecar"
import Pagination from "./Pagination"
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
   
    

    const all_pokes =()=> props.showpokemons()
    // const group_pokes = props.pokemonlist.slice(initidx,finalidx)
    
    useEffect(()=>{
        all_pokes()
         
    },[props.page])
    return (
        <div class="container text-center">
            <div class="row">
                {props.loading===true?(<h2>Loading...</h2>):(
                    props.pokemonlist.map((pokemon)=>{
                        return(
                            <div class="col-md-6 md-6">
                                <Pokecar
                                    name = {pokemon.name}
                                    height = {pokemon.height}             
                                    weight = {pokemon.weight}
                                    type = {pokemon.types[0].type.name}
                                    imagen = {pokemon.sprites.other.dream_world.front_default}
                                />
                            </div>
                        ) 
                    })
                )}
            </div>
            <Pagination setPage={props.setPage} pokemonlist={props.pokemonlist} pokemonqt = {props.pokemonqt} page={props.page}/>
        </div>
    )


}


export default PokemonList

{/* <div className="container-pokemons">
            {props.loading===true?(<h2>Loading...</h2>):(
                group_pokes.map((pokemon)=>{
                    return(
                        <div className="card-pokemons">
                            <Pokecar
                                name = {pokemon.name}
                                height = {pokemon.height}             
                                weight = {pokemon.weight}
                                type = {pokemon.types[0].type.name}
                                imagen = {pokemon.sprites.other.dream_world.front_default}
                            />
                        </div>
                    )
                })
            )}
            <Pagination pokemonqt={pokemonqt} page={page} setPage={setPage} pokemonlist={props.pokemonlist}/>
        </div> */}