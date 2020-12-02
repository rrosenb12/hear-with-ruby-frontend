import React from "react";
import { config } from "./config";
export default class Gallery extends React.Component {
  rootUrl = "https://graph.instagram.com";
  userId = "17841400784952251";
  accessToken = config.lindsay;

  state = {
    media: [],
    pics: [],
  };

  componentDidMount() {
    fetch(
      `${this.rootUrl}/${this.userId}/media?access_token=${this.accessToken}&fields=id,timestamp`
    )
      .then((response) => response.json())
      .then(console.log)
      // .then((response) => {
      //   this.setState({ media: response.data });
      // });
  }

  // componentDidUpdate() {
  //   this.state.media.map((media) => {
  //     return fetch(
  //       `${this.rootUrl}/${media.id}?access_token=${this.accessToken}&fields=media_url,caption`
  //     )
  //       .then((response) => response.json())
  //       .then(
  //         (response) =>
  //           response.caption.includes("#HearWithRuby") &&
  //           this.setState((previousState) => {
  //             return { pics: [...previousState.pics, response] };
  //           })
  //       );
  //   });
  // }

  render() {
    console.log("media:", this.state.media);
    console.log("pics:", this.state.pics);
    return <div></div>;
  }
}
