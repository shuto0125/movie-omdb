import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App"; // this changed
import { BrowserRouter, Route } from "react-router-dom";
import { MyMovie } from "./components/MyMovie";
// import * as serviceWorker from "./serviceWorker";
// import reportWebVitals from "./reportWebVitals";

import { FavProvider } from "./components/store";

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <FavProvider>
      <Route exact path="/" component={App}></Route>
      <Route path="/my-movie" component={MyMovie}></Route>
    </FavProvider>
  </BrowserRouter>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// reportWebVitals.unregister();
