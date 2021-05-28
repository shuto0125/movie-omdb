import React, { useReducer, useEffect, useContext } from "react";
import { FavContext } from "./store";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
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
  }, [favMovies]);

  const addMovie = (movie) => {
    const checkObj = favMovies;
    const result = checkObj.find((v) => v.imdbID === movie.imdbID);
    result == undefined
      ? // 現在の favMovies に newMovie を追加した配列を setFavMovies に渡す。
        setFavMovies([...favMovies, movie])
      : console.log("Already Listed !!!");
  };

  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie" onClick={() => addMovie(movie)}>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
