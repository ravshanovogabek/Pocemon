import React from "react";
import "./style.css"

// Define the array of colors here
const cardColors = ["aqua", "lightgreen", "lightcoral", "lightskyblue", "lightgoldenrodyellow"];

const Card = ({ pokemon, loading, onCardClick }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => {
          // Get a color from the array based on the index
          const color = cardColors[index % cardColors.length];
          return (
            <div className="card" key={item.id} onClick={() => onCardClick(item)} style={{ backgroundColor: color }}>
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
