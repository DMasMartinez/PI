import Searchbar from "../Components/Searchbar"
import Pokecard from "../Components/Pokecard"
import Ordenar from "../Components/Orderalfa"
import Ordenar2 from "../Components/Orderalfa2"
import { useLocation } from "react-router-dom"
function Showsearch(props){
    const location = useLocation()
    return(
        <div>
            {location.pathname!=='/home'&&location.pathname!=='/favorites'?(<Ordenar tipos = {props.tipos} alfabetic={props.alfabetic} noalfabetic={props.noalfabetic}/>):(<Ordenar2 tipos = {props.tipohome} alfabetic={props.orderhome} noalfabetic={props.noorderhome} pokemonlist={props.pokemonlist}/>)}
            {location.pathname!=='/favorites'&&<Searchbar search={props.search}/>}
            {location.pathname!=='/home'&&location.pathname!=='/favorites'&&<Pokecard users={props.users}/>}
        </div>
    )
}

export default Showsearch