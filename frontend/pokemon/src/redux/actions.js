

import { ADDFAV,REMOVEFAV } from "./type-actions";

export const addfav = (char)=>{
    return {
        type:ADDFAV,
        payload:char
    }
}
export const removefav = (name) =>{
    return {
        type:REMOVEFAV,
        payload:name
    }
}
