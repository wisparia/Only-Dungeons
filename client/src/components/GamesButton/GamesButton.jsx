import React from "react"
import "./gamesbutton.css"
import { Link } from "react-router-dom"

export default function HomeButton(){
    return(<li className="tab"><Link to="/dmdirectory">Games</Link></li>)

}