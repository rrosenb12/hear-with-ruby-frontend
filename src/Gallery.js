import React from "react";
import {config} from "./config"

export default class Gallery extends React.Component {

  state = {
    picturesArray: []
  }

  getPics = () => {
    fetch(`https://www.instagram.com/lepganci/?__a=1`)
      .then((response) => console.log(response))
  };

  render() {
    return (
      <>
        <h1>this will be the gallery</h1>
        {this.getPics()}
      </>
    );
  }
}
