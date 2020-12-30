import React from "react";
import homeImg from "./home-img.JPG";

export default function Home() {
  return (
    <home className="row" id="body">
      <p className="col-4">
        The Hear With Ruby fund has been established to ensure that all hearing
        impaired children have the chance to dream, achieve and thrive. Our
        family believes that every hearing impaired individual deserves equal
        access to the medical care, equipment, services and support needed. It
        is our mission to support families with hearing impaired child/ren with
        all costs associated with hearing loss, including audiology visits,
        amplification equipment (hearing aids, molds, batteries, cleaning
        supplies) and speech services, ensuring that everyone can Hear With
        Ruby.
      </p>
      <div className="heart-container">
        <div className="heart" />
      </div>
      <div className="heart-container__2">
        <div className="heart" />
      </div>
      <img
        className="col-8"
        src={homeImg}
        alt="Ruby wearing a black dress with starry design in pink glasses and a rainbow bow along with her hot pink and clear glittery hearing aids, which she styles with rainbow charms. She's looking to the side as she sits on her front porch."
      />
    </home>
  );
}
