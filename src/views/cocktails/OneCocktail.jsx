// import React from "react";

// export default function OneCocktail(props) {
//   console.log(props.match.params.id);
//   return <div>coucou</div>;
// }

import React, { useState, useEffect } from "react";

import axios from "axios";

export default function OneCocktail() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/${cocktail._id}`)
      .then(dbRes => setCocktails(dbRes.data))
      .catch(err => console.log(err));
  }, []);
  return <div className="fullPage">coucou</div>;
}
