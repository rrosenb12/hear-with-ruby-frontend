import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Gallery from "./Gallery"
import Home from "./Home"
import Story from "./Story"
import Blog from "./Blog"

import "./App.css";
import Help from "./Help";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/help" component={Help}/>
        <Route exact path="/story" component={Story}/>
        <Route exact path="/blog" component={Blog}/>
      </BrowserRouter>
    );
  }
}

export default App;
