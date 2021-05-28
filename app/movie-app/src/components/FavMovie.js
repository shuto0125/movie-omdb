import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";

import { FavContext } from "./store";

const cardListStyle = {
  padding: "10px",
  listStyle: "none",
};
const cardStyle = {
  width: "25%",
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "10px",
  boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
};
const cardTitleStyle = {
  fontWeight: "bold",
};
const cardPosterStyle = {
  width: "100%",
  height: "auto",
};
const movieDataWrapStyle = {
  textAlign: "left",
};
const deleteButtonStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30px",
  height: "30px",
  backgroundColor: "#aaa",
  color: "#fff",
  borderRadius: "50%",
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "1em",
  cursor: "pointer",
};

export const FavMoviePage = ({ movie }) => {
  const { favMovies, setFavMovies, myName, countFavMovies, setCountFavMovies } =
    useContext(FavContext);

  // localstorageのfavMoviesをobjectに変換する
  const favAry = JSON.parse(localStorage.getItem("favMovies"));

  // localstorageの値をstateに保存
  useEffect(() => {
    setFavMovies(favAry);
  }, []);
  // stateの値をlocalstorageに保存
  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
    setCountFavMovies(Object.keys(favMovies).length);
  }, [favMovies]);

  const addMovie = () => {
    const randNum = Math.random();
    const newMovie = {
      Title: randNum > 0.5 ? "きのこ" : "たけのこ",
      Poster:
        randNum > 0.5
          ? "https://images.unsplash.com/photo-1542417938-e59c0a54102b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
          : "https://cdn.pixabay.com/photo/2020/03/26/01/37/bamboo-shoot-4968949_960_720.jpg",
    };
    // 現在の favMovies に newMovie を追加した配列を setFavMovies に渡す。
    setFavMovies([...favMovies, newMovie]);
  };

  // 引数 index は削除したい要素のインデックス
  const deleteMovie = (index) => {
    // 現在の favMovies から、引数 index と同じインデックスの要素を
    // 削除した配列を setFavMovies に渡す。
    setFavMovies(favMovies.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header text="HOOKED" />
      <h3 className="App-intro">KAITANI's favourite movies</h3>

      <button onClick={addMovie}>Add きのこ or たけのこ</button>

      <ul className="movies" style={cardListStyle}>
        {favMovies.map((item, index) => (
          <li style={cardStyle}>
            <div style={movieDataWrapStyle}>
              <p style={cardTitleStyle}>{item.Title}</p>
              <img src={item.Poster} style={cardPosterStyle} />
            </div>
            <p>({item.Year})</p>
            <p>imdbID: {item.imdbID}</p>
            <span style={deleteButtonStyle} onClick={() => deleteMovie(index)}>
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
