
import './App.css';
// import Pokecard from './Components/Pokecard';
// import Searchbar from './Components/Searchbar';
import Home from './views/Home';
import Landing from './views/Landing';
import Favoritos from './views/Favoritos';
import Detail from './Components/Detail';
import Ordenar from './Components/Orderalfa';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Form from './views/Form';
import PokemonList from './Components/PokemonList';
import Showsearch from './views/Showsearch';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function App() {
  const[users,setUsers] = useState([])
  const[usersname,setUsersname] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  function search(name){
    fetch(`http://localhost:3001/pokemons/?name=${name}`)
      .then(res=>res.json())
      .then(data=>setUsers([...users,data]))
    navigate('/search')
  }

  function create_pokemon(name,weight,height,life,atack,defense,velocity,imagen){
    return {"name":name,"weight":weight,"height":height,"life":life,"atack":atack,"defense":defense,"velocity":velocity,"imagen":imagen}
  }
  
  function orderalfabetic(){
    const alfabetic = "abcdefghijklmnopqrstuvwxyz"
    var newlist = []
    for (var i=0; i<=alfabetic.length;i++){
      var aux = alfabetic[i]
      for (var j=0;j<users.length;j++){
        if (aux===users[j].name[0]){
          newlist.push(users[j])
        }
      }
    }
    setUsers(newlist)
  }
  function orderopositealfabetic(){
    const alfabetic = "zyxwvutsrqponmlkjihgfedcba"
    var newlist = []
    for (var i=0; i<=alfabetic.length;i++){
      var aux = alfabetic[i]
      for (var j=0;j<users.length;j++){
        if (aux===users[j].name[0]){
          newlist.push(users[j])
        }
      }
    }
    setUsers(newlist)
  }
  function poketype(tipo){
    const poketip = users.filter((user)=>user.types[0].type.name===tipo)
    setUsers(poketip)
  }
///////////////////////////
  const [pokemonlist,setPokemonlist] = useState([])
  const [loading,setLoading] = useState(true)
  const [pokemonqt,setPokemonqt] = useState(6)
  const [page,setPage] = useState(6)
  const finalidx = page*pokemonqt
  const initidx = finalidx - pokemonqt
  
  const showpokemons = async() =>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
    const data = await res.json()

    const pokemones = data.results.map(async(pokemon)=>{
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
    })
    const resultado = await Promise.all(pokemones)
    setPokemonlist([...resultado.slice(initidx,finalidx)])
    setLoading(false)
  }

  function orderalfabetichome(users){
    const alfabetic = "abcdefghijklmnopqrstuvwxyz"
    var newlist = []
    for (var i=0; i<=alfabetic.length;i++){
      var aux = alfabetic[i]
      for (var j=0;j<users.length;j++){
        if (aux===users[j].name[0]){
          newlist.push(users[j])
        }
      }
    }
    setPokemonlist(newlist)
  }
  function orderopositealfabetichome(users){
    const alfabetic = "zyxwvutsrqponmlkjihgfedcba"
    var newlist = []
    for (var i=0; i<=alfabetic.length;i++){
      var aux = alfabetic[i]
      for (var j=0;j<users.length;j++){
        if (aux===users[j].name[0]){
          newlist.push(users[j])
        }
      }
    }
    setPokemonlist(newlist)
  }
  function poketypehome(users,tipo){
    const poketip = users.filter((user)=>user.types[0].type.name===tipo)
    setPokemonlist(poketip)
  }

  useEffect(()=>{
    console.log("esto se ejecuta desde App")
  },[users])
  return (
    <div className="App">
      {/* <Searchbar search = {search}/>
      <Pokecard users={users}/> */}
      {location.pathname!=='/'&&location.pathname!=='/search'&&<Showsearch search={search} users={users} tipos={poketype} alfabetic={orderalfabetic} noalfabetic={orderopositealfabetic} orderhome = {orderalfabetichome} noorderhome = {orderopositealfabetichome} tipohome = {poketypehome} showpokemons={showpokemons} pokemonlist={pokemonlist} loading = {loading}/>}
      <Routes>
        <Route path='/home' element={<Home orderhome = {orderalfabetichome} noorderhome = {orderopositealfabetichome} tipohome = {poketypehome} showpokemons={showpokemons} pokemonlist={pokemonlist} setPokemonlist={setPokemonlist} loading = {loading} setPage={setPage} setPokemonqt={setPokemonqt} page={page} pokemonqt={pokemonqt}/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/favorites' element={<Favoritos/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/create' element={<Form create_pokemon={create_pokemon}/>}/>
        <Route path='/search' element={<Showsearch search={search} users={users} tipos={poketype} alfabetic={orderalfabetic} noalfabetic={orderopositealfabetic} orderhome = {orderalfabetichome} noorderhome = {orderopositealfabetichome} tipohome = {poketypehome} showpokemons={showpokemons} pokemonlist={pokemonlist} loading = {loading}/>} />
      </Routes>
    </div>
  );
}

export default App;
