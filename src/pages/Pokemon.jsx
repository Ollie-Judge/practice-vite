import { useState } from "react";
import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pokemon() {
  const pokemonNameInput = document.getElementById("pokemonNameInput");
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = (e) => {
    e.preventDefault();
    console.log(pokemonNameInput.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Header />
      <h2>Pokemon name: {pokemon.name}</h2>
      <h3>Pokemon ID: {pokemon.id}</h3>
      <form id="pokemonForm" action="/pokemon">
        <input
          type="text"
          id="pokemonNameInput"
          placeholder="Name of Pokemon"
        />
        <input
          type="submit"
          value="Submit"
          id="submitPokemonNameButton"
          onClick={searchPokemon}
        />
      </form>
      <Footer />
    </>
  );
}

export default Pokemon;
