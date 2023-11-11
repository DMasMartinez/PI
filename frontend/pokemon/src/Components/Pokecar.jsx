import { useEffect, useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { removefav } from "../redux/actions"
import { addfav } from "../redux/actions"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
function Pokecar(props){
    const [isfav,setIsfav] = useState(false)
    const dispatch = useDispatch()
    const myfavorites = useSelector(state=>state.favorites)
    const location = useLocation()
    function handlerchange(){
        if (isfav){
            setIsfav(!isfav)
            dispatch(removefav(props.name))
        }else{
            setIsfav(!isfav)
            dispatch(addfav(props))
        }
    }
    useEffect(()=>{
        myfavorites.forEach((fav)=>{
            if (fav.name===props.name){
                setIsfav(true)
            }
        })
    }
    ,[myfavorites])
    return(
            

        <div class="card w-25">
            {isfav?(<button onClick={()=>handlerchange()}>❤️</button>):(<button onClick={()=>handlerchange()}>🤍</button>)}
            {location.pathname!=='/favorites'?<img src={props.imagen} alt={props.name} class="card-img-top"/>:<img src={props.picture} alt={props.name} class="card-img-top"/>}
            <div class="card-body">
                <Link to={`/detail/${props.name}`}>
                    <h2 class="card-title">{props.name}</h2>
                </Link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{props.height}ft</li>
                <li class="list-group-item">{props.weight}lb</li>
                <li class="list-group-item">{props.type}</li>
            </ul>
        </div>
    )
}

export default Pokecar

// {isfav?(<button onClick={()=>handlerchange()}>si</button>):(<button onClick={()=>handlerchange()}>no</button>)}
//             <Link to={`/detail/${props.name}`}>
//                 <h2>{props.name}</h2>
//             </Link>
//             <h2>{props.height}ft</h2>
//             <h2>{props.weight}lb</h2>
//             <h2>{props.type}</h2>
//             {location.pathname!=='/favorites'?<img src={props.imagen} alt={props.name}/>:<img src={props.picture} alt={props.name}/>}