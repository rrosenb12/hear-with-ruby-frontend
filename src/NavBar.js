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
            <NavLink id="nav__nav-link" className="col-2" to="/blog">
              <p >
                Team <br />
                #HearWithRuby
              </p>
            </NavLink>
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
            <NavLink className="link" to="/story">
              <p onClick={() => switchClicked(!clicked)}>Ruby's Story</p>
            </NavLink>
            <NavLink className="link" to="/blog">
              <p onClick={() => switchClicked(!clicked)}>Team #HWR</p>
            </NavLink>
            <NavLink className="link" to="/">
              <p onClick={() => switchClicked(!clicked)} id="title">
                Hear With Ruby
              </p>
            </NavLink>
            <NavLink className="link" to="/help">
              <p onClick={() => switchClicked(!clicked)}>
                Help Hearing, With Ruby
              </p>
            </NavLink>
            <NavLink className="link" to="/gallery">
              <p onClick={() => switchClicked(!clicked)}>Gallery</p>
            </NavLink>
          </dropdown>
        </>
      )}
    </>
  );
}
