import { Link } from "react-router-dom"
import poke_image from '../utils/pokemon-1671869502.jpg'
import Showpokemons from "./Shows"
function Landing(){
    return(
        <div>
            <Showpokemons/>
            <Link to='/home'>
                <button>HOME</button>
            </Link>
            <img src={poke_image} alt="ash"/>
        </div>
    )
}

export default Landing