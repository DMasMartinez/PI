
import Pokecar from "./Pokecar"

function Pokecard(props){
    console.log(props.users)
    return (
        <div>
            {props.users.map((user)=>{
                return (
                    
                    <div>
                        <Pokecar
                            id = {user.id}
                            name = {user.name}
                            weight = {user.weight}
                            height = {user.height}
                            type = {user.types[0].type.name}
                            imagen = {user.sprites.front_default}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Pokecard