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
            <button onClick={()=>props.search(newname)} class="btn btn-outline-success" type="submit">Add</button>
            <input name="busqueda" onChange={handlerchangename} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
    )
}

export default Searchbar