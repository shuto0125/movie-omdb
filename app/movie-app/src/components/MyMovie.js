import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";

const cardListStyle = {
  padding: "10px",
  listStyle: "none",
};
const cardStyle = {
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "10px",
  boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  cursor: "pointer",
};
const favAry = [
  {
    name: "movie1",
    imageUrl: "https://google.co.jp",
  },
  {
    name: "movie2",
    imageUrl: "https://google.co.jp",
  },
  {
    name: "movie3",
    imageUrl: "https://google.co.jp",
  },
  {
    name: "movie4",
    imageUrl: "https://google.co.jp",
  },
];
export const MyMovie = ({ movie }) => {
  // Similar to useState but first arg is key to the value in local storage.
  // const [name, setName] = useLocalStorage("name", "Bob");

  const [favMovies, setFavMovies] = useState(favAry);
  // console.log(favAry);

  useEffect(() => {
    console.log(favMovies);

    //JSON.stringifyした上で、localStorageに保存します。
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const addMovie = () => {
    const newMovie = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ",
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
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
      <button onClick={addMovie}>Add きのこ Movie</button>
      <div className="movies"></div>

      <ul style={cardListStyle}>
        {favMovies.map((item, index) => (
          <li style={cardStyle}>
            <span style={movieDataWrapStyle}>
              <p>{item.name}</p>
              <img src={item.imageUrl} />
            </span>
            <span style={deleteButtonStyle} onClick={() => deleteMovie(index)}>
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
