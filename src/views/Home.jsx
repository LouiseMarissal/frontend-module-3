import React, {useState} from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";

export default function Home() {
  return (
    <div>
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <CocktailsList />
    </div>
  );
}
