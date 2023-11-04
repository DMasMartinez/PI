import Pokecard from "../Components/Pokecard"
import Searchbar from "../Components/Searchbar"
import { Link } from "react-router-dom"
import Ordenar from "../Components/Orderalfa"
import Pokecar from "../Components/Pokecar"
import { useEffect, useState } from "react"
function Home(props){
    return(
        <div>
            <Link to='/favorites'>
                <span>Favorites</span>
            </Link>
            <Link to='/create'>
                <span>create</span>
            </Link>
            <Ordenar tipos = {props.tipos} alfabetic={props.alfabetic} noalfabetic={props.noalfabetic}/>
            <Searchbar search = {props.search}/>
            <Pokecard users = {props.users}/>
        </div>
    )
}

export default Home