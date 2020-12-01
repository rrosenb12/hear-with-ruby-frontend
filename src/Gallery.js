import React from "react";

export default class Gallery extends React.Component {

  getPics = () => {
    fetch("https://api.instagram.com/v1/users/search")
      .then((response) => response.json())
      .then(response => console.log(response));
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
