import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Detail(){
    const {name} = useParams()
    // const [character,setCharacter] = useState([])
    const [char,setChar] = useState({})
    // const [vida,setVida] = useState([])
    // const [velocity,setVelocity] = useState([])
    // const [atack,setAtack] = useState([])
    // const [defense,setDefense] = useState([])
    // useEffect(()=>{
    //   fetch(`http://localhost:3001/pokemons/?name=${name}`)
    //         .then(res=>res.json())
    //         .then((data)=>setCharacter(data.sprites.other.dream_world.front_default))
    // },[name])  
    useEffect(()=>{
        fetch(`http://localhost:3001/pokemons/?name=${name}`)
              .then(res=>res.json())
              .then((data)=>setChar(data))
    },[name])
    // useEffect(()=>{
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //           .then(res=>res.json())
    //           .then((data)=>setVida(data.stats[0].base_stat))
    // },[name])
    // useEffect(()=>{
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //           .then(res=>res.json())
    //           .then((data)=>setVelocity(data.stats[5].base_stat))
    // },[name])
    // useEffect(()=>{
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //           .then(res=>res.json())
    //           .then((data)=>setAtack(data.stats[1].base_stat))
    // },[name])
    // useEffect(()=>{
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //           .then(res=>res.json())
    //           .then((data)=>setDefense(data.stats[2].base_stat))
    // },[name])
    //////////////////////////////////////////////////////////////////

    // useEffect(() => {
    //     axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(({ data }) => {
    //        if (data.name) {
    //           setCharacter(data);
    //        } else {
    //           window.alert('No hay personajes con ese ID');
    //        }
    //     });

    //  }, [name]);
    
    // console.log(character)
    return(
        <div>
            <h2>#{char.ide}</h2>
            <h2>name:{char.name}</h2>
            {char.weight&&<h2>weight:{char.weight}lb</h2>}
            {char.height&&<h2>height:{char.height}ft</h2>}
            {char.velocity&&<h2>velocity:{char.velocity}</h2>}
            <h2>health:{char.health}</h2>
            <h2>atack:{char.atack}</h2>
            <h2>defense:{char.defense}</h2>
            <img src={char.image}/>
        </div>
        // <div>
        //     <h2>aqui se muestra el detalle</h2>
        //     <h2>#{char.id}</h2>
        //     <h2>name:{char.name}</h2>
        //     {char.weight&&<h2>weight:{char.weight}lb</h2>}
        //     {char.height&&<h2>height:{char.height}ft</h2>}
        //     {velocity&&<h2>velocity:{velocity}</h2>}
        //     <h2>hp:{vida}</h2>
        //     <h2>atack:{atack}</h2>
        //     <h2>defense:{defense}</h2>
        //     <img src={character}/>
        // </div>
    )
}

export default Detail

{/* <h2>{character.name}</h2>
            <h2>{character.height}</h2>
            <h2>{character.id}</h2>
            <h2>{character.order}</h2>
            <h2>{character.weight}</h2> */}