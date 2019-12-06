import React, { Suspense, lazy } from "react";
import {} from "react";
import "./../../css/CocktailList.css";

const CocktailCard = React.lazy(() => import("./CocktailCard"));
const List = ({ cocktails }) => {
  return (
    <div
      className="fullcocktail"
    >
      {cocktails.map((cocktail, i) => (
        <Suspense key={i} fallback={<div>Loading...</div>}>
          <CocktailCard key={i} cocktail={cocktail} />
        </Suspense>
      ))}
    </div>
  );
};
export default List;
