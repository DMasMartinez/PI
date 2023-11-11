

import { Link } from "react-router-dom"
import PokemonList from "../Components/PokemonList"
function Home(props){
    return(
        <div>
            {/* <Link to='/search'>
                <span>Search</span>
            </Link>
            <Link to='/favorites'>
                <span>Favorites</span>
            </Link>
            <Link to='/create'>
                <span>create</span>
            </Link> */}
            {/* <Ordenar2 tipos = {props.tipohome} alfabetic={props.orderhome} noalfabetic={props.noorderhome} pokemonlist={props.pokemonlist}/> */}
            <PokemonList showpokemons = {props.showpokemons} pokemonlist = {props.pokemonlist} loading = {props.loading} setPokemonlist={props.setPokemonlist}/>
        </div>
    )
}

export default Home