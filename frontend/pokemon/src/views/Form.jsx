import { useEffect, useState } from "react"
import shadow_pokemon from '../utils/charizard-pokemon-silhouette-52650-90498.jpg'
import { useDispatch } from "react-redux"
import { addfav,removefav } from "../redux/actions"


function validate(usuario,setError,error){
    if (typeof(usuario.name)!=="string"&&usuario.name!==""){
        setError({...error,name:"wrong data type in name"})
    }
    if (typeof(usuario.weight)!=="number"&&usuario.weight!==""){
        setError({...error,weight:"wrong data type in weight"})
    }
    if (typeof(usuario.height)!=="number"&&usuario.height!==""){
        setError({...error,height:"wrong data type in height"})
    }
    if (typeof(usuario.life)!=="number"&&usuario.life!==""){
        setError({...error,life:"wrong data type in life"})
    }
    if (typeof(usuario.atack)!=="number"&&usuario.atack!==""){
        setError({...error,atack:"wrong data type in atack"})
    }
    if (typeof(usuario.defense)!=="number"&&usuario.defense!==""){
        setError({...error,defense:"wrong data type in defense"})
    }
    if (typeof(usuario.velocity)!=="number"&&usuario.velocity!==""){
        setError({...error,velocity:"wrong data type in velocity"})
    }
}
function Form(props){
    const [isfav,setIsfav] = useState(false)
    const dispatch = useDispatch()
    const [usuario,setUsuario] = useState({
        name:'',
        weight:'',
        height:'',
        life:'',
        atack:'',
        defense:'',
        velocity:'',
        imagen:shadow_pokemon
    })
    const [error,setError] = useState({
        name:'',
        weight:'',
        height:'',
        life:'',
        atack:'',
        defense:'',
        velocity:'',
    })
    const [create,setCreate] = useState(false)
    const newpokemon = []
    const [lista,setLista] = useState({
        lista:[],
        count:0
    })
    function handlerusuariochange(event){
        if (event.target.name==="name"){
            setUsuario({...usuario,name:event.target.value})
            validate({...usuario,name:event.target.value},setError,error)
            
        }
        if (event.target.name==="weight"){
            validate({...usuario,weight:event.target.value},setError,error)
            setUsuario({...usuario,weight:event.target.value})
            
        }
        if (event.target.name==="height"){
            validate({...usuario,height:event.target.value},setError,error)
            setUsuario({...usuario,height:event.target.value})
            
        }
        if (event.target.name==="life"){
            validate({...usuario,life:event.target.value},setError,error)
            setUsuario({...usuario,life:event.target.value})
            
        }
        if (event.target.name==="atack"){
            validate({...usuario,atack:event.target.value},setError,error)
            setUsuario({...usuario,atack:event.target.value})
            
        }
        if (event.target.name==="defense"){
            setUsuario({...usuario,defense:event.target.value})
            validate({...usuario,defense:event.target.value},setError,error)
        }
        if (event.target.name==="velocity"){
            validate({...usuario,velocity:event.target.value},setError,error)
            setUsuario({...usuario,velocity:event.target.value})
            
        }
    }
    function handlercreatechange(event){
        if (event.target.name==="submit"){
            setCreate(!create)
        }
    }
    function handlerfavoritechange(event){
        if (isfav){
            setIsfav(!isfav)
            // dispatch(removefav(newpoke.name))
            
        }else{
            setIsfav(!isfav)
            // dispatch(addfav(newpoke))
        }
        //revisar esta parte no se como usar addfav
    }
    function submit(event){
        event.preventDefault()
    }
    useEffect(()=>{
        const newpoke = props.create_pokemon(usuario.name,usuario.weight,usuario.height,usuario.life,usuario.atack,usuario.defense,usuario.velocity,usuario.imagen)
        setLista({...lista,lista:[...lista.lista,newpoke]})
        // setLista({...lista,count:lista.count+1})
    },[create])
    console.log(error)
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name">name : </label>
                <input type="text" name="name" value={usuario.name} onChange={handlerusuariochange}/>
                {error.name&&<h3>{error.name}</h3>}

                <label htmlFor="weight">weight :</label>
                <input type="text" name="weight" value={usuario.weight} onChange={handlerusuariochange}/>
                {(error.weight&&usuario.weight)&&<h3>{error.weight}</h3>}

                <label htmlFor="height">height :</label>
                <input type="text" name="height" value={usuario.height} onChange={handlerusuariochange}/>
           

                <label htmlFor="life">life :</label>
                <input type="text" name="life" value={usuario.life} onChange={handlerusuariochange}/>
        

                <label htmlFor="atack">atack :</label>
                <input type="text" name="atack" value={usuario.atack} onChange={handlerusuariochange}/>
             

                <label htmlFor="defense">defense :</label>
                <input type="text" name="defense" value={usuario.defense} onChange={handlerusuariochange}/>


                <label htmlFor="velocity">velocity :</label>
                <input type="text" name="velocity" value={usuario.velocity} onChange={handlerusuariochange}/>
       

                <button type="submit" name="submit" onClick={handlercreatechange}>Create</button>
        
            </form>
            {lista.lista.map((pokemon)=>{
                return(
                    <div>
                        <h2>{pokemon.name}</h2>
                        <h2>{pokemon.weight}</h2>
                        <h2>{pokemon.height}</h2>
                        <h2>{pokemon.life}</h2>
                        <h2>{pokemon.atack}</h2>
                        <h2>{pokemon.defense}</h2>
                        <h2>{pokemon.velocity}</h2>
                        {pokemon.name&&pokemon.weight&&pokemon.height&&pokemon.life&&pokemon.atack&&pokemon.defense&&pokemon.velocity&&<img src={pokemon.imagen}/>}
                    </div>
                )
            })}
        </div>

    )
}
// si queremos luego anadirlo al view favorites debemos anadirle un boton me gusta y traernos con dispatch
// y useselector lo que necesitemos esta es la unica manera que se me ocurre de hacerlo aparecer en algun view reciclando codigo.

export default Form