import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav id="body" className="row">
        <p id="body" className="col-2">
          Ruby's Story
        </p>
        <p id="body" className="col-2">
          Team <br />
          #HearWithRuby
        </p>
        <p id="title" className="col-4">
          Hear With Ruby
        </p>
        <p id="body" className="col-2">
          Help Hearing, <br />
          With Ruby
        </p>
        <p id="body" className="col-2">
          Gallery
        </p>
      </nav>
        <div className="double-line" />
        <div className="diamond" />
        <div className="double-line__right" />
    </>
  );
}
