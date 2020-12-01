import React from "react"
import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="row">
            <p className="col-2">Ruby's Story</p>
            <p className="col-2">Team <br/>#HearWithRuby</p>
            <p id="title" className="col-4">Hear With Ruby</p>
            <p className="col-2">Help Hearing, <br/>With Ruby</p>
            <p className="col-2">Gallery</p>
        </nav>
    )
}