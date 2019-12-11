import React, { Suspense, lazy } from "react";
import {} from "react";

const CocktailCard = React.lazy(() => import("./CocktailCard"));
const List = ({ cocktails, cocktailsFav, isUser }) => {
  return (
    <div className="fullcocktail">
      {cocktails.map((cocktail, i) => (
        <Suspense key={i} fallback={<div>Loading...</div>}>
          <CocktailCard
            key={i}
            cocktail={cocktail}
            cocktailsFav={cocktailsFav}
            isUser={isUser}
          />
        </Suspense>
      ))}
    </div>
  );
};
export default List;
