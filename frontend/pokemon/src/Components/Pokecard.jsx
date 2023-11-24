
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
                            type = {user.type[0]}
                            imagen = {user.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Pokecard

// s[0].type.name  sacado de type para poder usar mi back
// sprites.front_default