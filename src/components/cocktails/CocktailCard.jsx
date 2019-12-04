import React from "react";

export default function CocktailCard({ cocktail }) {
  return (
    <>
      <div>{cocktail.Name}</div>
      <div>
        <img src={cocktail.Image}></img>
      </div>
    </>
  );
}
