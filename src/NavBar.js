import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav id="nav" className="row">
        <p className="col-2">
          Ruby's Story
        </p>
        <p className="col-2">
          Team <br />
          #HearWithRuby
        </p>
        <p id="title" className="col-4">
          Hear With Ruby
        </p>
        <p className="col-2">
          Help Hearing, <br />
          With Ruby
        </p>
        <NavLink id="nav__nav-link" className="col-2" to="/gallery">
          <p>
            Gallery
          </p>
        </NavLink>
      </nav>
      <div className="double-line" />
      <div className="diamond" />
      <div className="double-line__right" />
    </>
  );
}
