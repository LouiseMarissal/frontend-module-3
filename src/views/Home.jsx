import React, { useState, useEffect } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
// import useSearch from "../components/Bars/UseSearch";
//import filter from "../components/Bars/Filters";
import "./../css/Home.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(true);
  const [myOffset, setOffset] = useState(1);
  const [cocktailsDisplayed, setCocktailsDisplayed] = useState([]);
  const [queryFiltered, setQueryFiltered] = useState([]);
  const [favCocktails, setFavCocktails] = useState([]);

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar regular";
    }
  }, []);

  useEffect(() => {
    const copy = [...queryFiltered];
    const elements = copy.splice(0, 20);
    setCocktailsDisplayed(elements);
  }, [queryFiltered]);

  useEffect(() => {
    utilsSearch(query);
  }, [query]);

  function utilsSearch(query) {
    let cancel;
    return axios({
      method: "GET",
      url: process.env.REACT_APP_BACKEND_URL + "/cocktail",
      params: { query },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        setFavCocktails(res.data.cocktailsWithFavorites);
        setQueryFiltered(res.data.dbRes);
      })
      .catch(err => {
        if (axios.isCancel(err)) return;
      });
  }

  const handleScroll = e => {
    var offset = window.innerHeight + e.target.scrollTop;
    var height = e.target.scrollHeight;
    handleScrollSearchBar(e);
    if (offset > height - 1) {
      const copy = [...queryFiltered];
      const elements = copy.splice(myOffset * 20, 20);
      setCocktailsDisplayed([...cocktailsDisplayed, ...elements]);
      setOffset(off => off + 1);
    }
  };

  const handleScrollSearchBar = e => {
    var navBar = document.getElementById("navBar");
    var searchBar = document.getElementById("searchBar");
    var blurEffect = document.getElementById("blurEffect");
    if (e.target.scrollTop <= 630 && searchBar) {
      navBar.className = "nav-bar white";
      blurEffect.className = "blurEffect";
    } else {
      navBar.className = "nav-bar black";
      blurEffect.className = "blurEffect backgroundBlur";
    }
  };

  const smoothScrollToContent = e => {
    e.preventDefault();
    let anchorTarget = document.getElementById("searchBar");
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fullpage-overflow">
      <div
        className="fullPage"
        onScroll={(handleScrollSearchBar, handleScroll)}
      >
        <div className="bannerHome">
          <div>
            <h1 className="title">HomePage of Mixology Loveeers</h1>
            <h2>The cocktail interface dedicated to Mixology Lovers..</h2>
          </div>
          <span
            className="arrow animated infinite bounce delay-2s slow"
            onClick={smoothScrollToContent}
          >
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>

        <div className={`fullPageHeader`}>
          <input
            onChange={handleSearch}
            className="searchBarHome"
            id="searchBar"
            placeholder="Search..."
          ></input>
        </div>
        <div className="blurEffect" id="blurEffect"></div>
        <section id="cocktailContent">
          <h3>Our cocktails</h3>
          <CocktailsList
            cocktails={
              queryFiltered.length < 18 ? queryFiltered : cocktailsDisplayed
            }
            cocktailsFav={favCocktails}
          />
        </section>
      </div>
    </div>
  );
}
