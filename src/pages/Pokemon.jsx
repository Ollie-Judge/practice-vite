import { useState, useEffect } from "react";
import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <h2>Pokemon name: {pokemon.name}</h2>
      <h3>Pokemon ID: {pokemon.id}</h3>

      <Footer />
    </>
  );
}

export default Pokemon;
