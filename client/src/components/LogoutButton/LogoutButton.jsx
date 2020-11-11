import React from "react"
import "./logoutbutton.css"
import { Link } from "react-router-dom"

export default function HomeButton(){

    return(
        <li className="tab"><Link to="/">Logout</Link></li>
        )

}