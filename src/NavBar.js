import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import heartPng from "./heart-png.webp";

export default function NavBar() {
  const [clicked, switchClicked] = useState(false);

  return (
    <>
      {window.innerHeight < window.innerWidth ? (
        <>
          <nav id="nav" className="row">
            <NavLink id="nav__nav-link" className="col-2" to="/story">
              <p>Ruby's Story</p>
            </NavLink>
            <p className="col-2">
              Team <br />
              #HearWithRuby
            </p>
            <NavLink id="nav__nav-link" className="col-4" to="/">
              <p id="title">Hear With Ruby</p>
            </NavLink>
            <NavLink id="nav__nav-link" className="col-2" to="/help">
              <p>
                Help Hearing, <br />
                With Ruby
              </p>
            </NavLink>
            <NavLink id="nav__nav-link" className="col-2" to="/gallery">
              <p>Gallery</p>
            </NavLink>
          </nav>
          <div className="double-line" />
          <div className="diamond" />
          <div className="double-line__right" />
        </>
      ) : (
        <>
          <nav>
            <img
              src={heartPng}
              alt="Heart"
              onClick={() => switchClicked(!clicked)}
            />
          </nav>
          <dropdown style={clicked ? { width: "150px" } : { width: "0" }}>
            <NavLink to="/story">
              <p>Ruby's Story</p>
            </NavLink>
            <p >Team #HWR</p>
            <NavLink to="/">
              <p id="title">Hear With Ruby</p>
            </NavLink>
            <NavLink to="/help">
              <p>Help Hearing, With Ruby</p>
            </NavLink>
            <NavLink to="/gallery">
              <p>Gallery</p>
            </NavLink>
          </dropdown>
        </>
      )}
    </>
  );
}
