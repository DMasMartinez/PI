import Pokecard from "../Components/Pokecard"
import Searchbar from "../Components/Searchbar"
import { Link } from "react-router-dom"
import Ordenar2 from "../Components/Orderalfa2"
import Pokecar from "../Components/Pokecar"
import { useEffect, useState } from "react"
import PokemonList from "../Components/PokemonList"
function Home(props){
    return(
        <div>
            <Link to='/search'>
                <span>Search</span>
            </Link>
            <Link to='/favorites'>
                <span>Favorites</span>
            </Link>
            <Link to='/create'>
                <span>create</span>
            </Link>
            {/* <Ordenar2 tipos = {props.tipohome} alfabetic={props.orderhome} noalfabetic={props.noorderhome} pokemonlist={props.pokemonlist}/> */}
            <PokemonList showpokemons = {props.showpokemons} pokemonlist = {props.pokemonlist} loading = {props.loading}/>
        </div>
    )
}

export default Home