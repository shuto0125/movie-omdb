import React, { useContext } from "react";
import { FavContext } from "./store";

const Header = (props) => {
  const { favMovies, setFavMovies, myName, countFavMovies, setCountFavMovies } =
    useContext(FavContext);

  return (
    <header className="App-header">
      <h2>
        <a href="/">Movie Search</a>
      </h2>
      <a
        href="/fav-movie"
        style={{
          backgroundColor: "#ffffff",
          color: "#333",
          padding: "3px 10px",
          borderRadius: "30px",
        }}
      >
        favMovies ({countFavMovies})
      </a>
    </header>
  );
};

export default Header;
