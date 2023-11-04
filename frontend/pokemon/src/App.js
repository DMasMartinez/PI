
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


function App() {
  const[users,setUsers] = useState([])
  const[usersname,setUsersname] = useState([])
  function search(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res=>res.json())
      .then(data=>setUsers([...users,data]))
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
  useEffect(()=>{
    console.log("esto se ejecuta desde App")
  },[users])
  return (
    <div className="App">
      {/* <Searchbar search = {search}/>
      <Pokecard users={users}/> */}
      <Routes>
        <Route path='/home' element={<Home tipos = {poketype} noalfabetic = {orderopositealfabetic} alfabetic = {orderalfabetic} users={users} search={search}/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/favorites' element={<Favoritos/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/create' element={<Form create_pokemon={create_pokemon}/>}/>
      </Routes>
    </div>
  );
}

export default App;
