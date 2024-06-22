import React from "react";

const Pokeinfo = ({ pokemon }) => {
  return (
    <>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="" />
          <div className="abilities">
            {pokemon.abilities.map((ability, index) => (
              <div className="group" key={index}>
                <h2>{ability.ability.name}</h2>
              </div>
            ))}
          </div>
          <div className="base-stat">
            {pokemon.stats.map((stat, index) => (
              <h3 key={index}>
                {stat.stat.name}: {stat.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
