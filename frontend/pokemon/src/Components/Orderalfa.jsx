import { useEffect, useState } from "react";
import { useReducer } from "react";

function Ordenar(props){
    const [optionchoice,setOptionchoice] = useState("")
    const [bestoption,setBestoption] = useState("")
    const [ignored,forceUpdate] = useReducer(x=>x+1,0);
    function handlerchange(event){
        if (event.target.name==="ascendente"){
            const choice = event.target.value
            setOptionchoice(choice)
            if (choice==="AZ"){
                return props.alfabetic()
            }
            else if (choice==="ZA"){
                return props.noalfabetic()
            }else{
                return
            }
        }
        if (event.target.name==="tipos"){
            const choice2 = event.target.value
            setBestoption(choice2)
            props.tipos(choice2)
        }
        forceUpdate()
    }

    return (
        <div>
            <label htmlFor="ascendente">select filter</label>
            <select name="ascendente" value = {optionchoice} onChange={handlerchange}>
                <option value=''></option>
                <option value='AZ'>A-Z</option>
                <option value='ZA'>Z-A</option>
            </select>
            <label htmlFor="tipos">select filter</label>
            <select name="tipos" value={bestoption} onChange={handlerchange}>
                <option value='fire'>fire</option>
                <option value='water'>water</option>
                <option value='bug'>bug</option>
                <option value='electric'>electric</option>
                <option value='normal'>normal</option>
                <option value='grass'>grass</option>
            </select>
        </div>
    )
}

export default Ordenar;