import React from "react";
import "./../../css/AddCocktail.css";

import CocktailList from "./../../components/cocktails/CocktailsList";
import axios from "axios";

export default function UserProfile(id) {
  const [user, setUser] = useState({});

  const getUserCocktail = () => {
    axios
      .get(process.env.REACR_APP_BACKEND_URL, "/userCocktail/" + _userProID)
      .then()
      .catch();
  };

  return (
    <div>
      <CocktailList cocktails={} />
    </div>
  );
}
