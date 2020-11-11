import React from "react"
import "./homebutton.css"
import { Link } from "react-router-dom"

export default function HomeButton(){
    return(<li className="tab"><Link to="/">Home</Link></li>)

}