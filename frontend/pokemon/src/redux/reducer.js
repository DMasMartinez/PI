import { ADDFAV,REMOVEFAV } from "./type-actions"
const newstate ={
    favorites:[],
    orden:[]
}
const rootReducer =(state = newstate,action)=>{
    
    switch(action.type){
        case ADDFAV:
            return {...state,
                favorites:[...state.favorites,action.payload]}
        case REMOVEFAV:
            return {...state,
                favorites:state.favorites.filter((fav)=>fav.name!==action.payload)}
        default:
            return {...state}
    }
}
export default rootReducer