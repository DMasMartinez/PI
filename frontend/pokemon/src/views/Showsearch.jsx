import Searchbar from "../Components/Searchbar"
import Pokecard from "../Components/Pokecard"
import Ordenar from "../Components/Orderalfa"
import Ordenar2 from "../Components/Orderalfa2"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
function Showsearch(props){
    const location = useLocation()
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <Link to='/'>
                    <h1>POKEMON</h1>
                  </Link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to='/search' className="nav-link">
                        <h3>search</h3>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/favorites' class="nav-link">
                        <h3>favorites</h3>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/create' class="nav-link">
                        <h3>create</h3>
                      </Link>
                    </li>
                  </ul>
                  {location.pathname!=='/favorites'&&<Searchbar search={props.search} class="d-flex" role="search"/>}

                </div>
              </div>
            </nav>
            {location.pathname!=='/home'&&location.pathname!=='/favorites'&&<Pokecard users={props.users}/>}
        </div>
    )
}

export default Showsearch

            // {location.pathname!=='/home'&&location.pathname!=='/favorites'?(<Ordenar tipos = {props.tipos} alfabetic={props.alfabetic} noalfabetic={props.noalfabetic}/>):(<Ordenar2 tipos = {props.tipohome} alfabetic={props.orderhome} noalfabetic={props.noorderhome} pokemonlist={props.pokemonlist}/>)}
            // {location.pathname!=='/favorites'&&<Searchbar search={props.search}/>}
            // {location.pathname!=='/home'&&location.pathname!=='/favorites'&&<Pokecard users={props.users}/>}