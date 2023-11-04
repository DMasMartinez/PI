import { useState } from "react"

function Searchbar(props){
    const [newname,setNewname] = useState("")
    function handlerchangename(event){
        if (event.target.name === "busqueda"){
            setNewname(event.target.value)
        }
    }
    return (
        <div>
            <button onClick={()=>props.search(newname)}>Add</button>
            <input type="text" name="busqueda" onChange={handlerchangename}/>
        </div>
    )
}

export default Searchbar