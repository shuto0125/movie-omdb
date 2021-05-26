import React from "react";

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>
        <a href="/">{props.text}</a>
      </h2>
      <a href="/my-movie">myMovies</a>
    </header>
  );
};

export default Header;
