import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Gallery from "./Gallery"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/gallery" component={Gallery}/>
      </BrowserRouter>
    );
  }
}

export default App;
