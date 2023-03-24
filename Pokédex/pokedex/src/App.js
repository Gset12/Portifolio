import './App.css';
import axios from "axios";
import {useState} from "react";
import Poke from "./pokedex.png";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({})
  const [name, setNome] = useState("")

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`).then(({data}) =>{

      setPokemon(
        {
          nome: data.name,
          id: data.id,
          img: data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
        }
      )
    });
  
  return (
    <>
      <form className='form'>
        <input className='pesquisa'
        type={"search"}
        value={name}
        placeholder="name or number"
        autoComplete="off"
        onChange={(e) => {
          setNome(e.target.value)
        }} 
        />
      </form>
      <h1 className="pokeData">
        <span className='pokeId'>{pokemon.id}</span> - <span className='pokeName'>{pokemon.nome}</span>
      </h1>
      <img className='pokeImg' src={pokemon.img}></img>
      <img className='pokedex' src={Poke}></img>
    </>
  )
}


export default Pokedex;
