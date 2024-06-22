import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (results) => {
    const pokemonData = await Promise.all(
      results.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setPokeData(pokemonData.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card pokemon={pokeData} loading={loading} onCardClick={handleCardClick} />
          <br />
          <div className="btn-group">
            <button onClick={() => setUrl(prevUrl)}>Previous</button>
            <button onClick={() => setUrl(nextUrl)}>Next</button>
          </div>
        </div>
        <div className="right-content">
          {selectedPokemon && (
            <div className="Pokeinfo">
              {/* Render Pokeinfo component with selectedPokemon data */}
              <Pokeinfo pokemon={selectedPokemon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
