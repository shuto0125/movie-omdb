import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App"; // this changed
import { BrowserRouter, Route } from "react-router-dom";
import { FavMoviePage } from "./components/FavMovie";
// import * as serviceWorker from "./serviceWorker";
// import reportWebVitals from "./reportWebVitals";

import { FavProvider } from "./components/store";

const root = document.getElementById("root");
const MyIndex = () => {
  return (
    <BrowserRouter>
      <FavProvider>
        <Route exact path="/" component={App}></Route>
        <Route path="/fav-movie" component={FavMoviePage}></Route>
      </FavProvider>
    </BrowserRouter>
  );
};
ReactDOM.render(<MyIndex />, root);
// export default Index;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// reportWebVitals.unregister();
