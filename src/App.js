import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  }
}

export default App;
