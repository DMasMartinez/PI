import { useSelector } from 'react-redux'
import Pokecar from '../Components/Pokecar'
function Favoritos(props){
    const myfavorites = useSelector(state=>state.favorites)
    console.log(myfavorites)
    return (
        <div>
            <h2>Lista de Favoritos</h2>
            {myfavorites.map((fav)=>{
                return(
                    <Pokecar
                    id = {fav.id}
                    name = {fav.name}
                    height = {fav.height}
                    picture = {fav.imagen}
                    />
                )
            })}
        </div>
    )
}


export default Favoritos;