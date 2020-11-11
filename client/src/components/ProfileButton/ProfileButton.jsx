import React, { useContext } from "react"
import UserContext from "../../context/UserContext"
import "./profilebutton.css"
import { Link } from "react-router-dom"

export default function HomeButton(){
    const {userId} = useContext(UserContext)

    return(
        <li className="tab"><Link to={`/UpdateForm/${userId}`}>Profile</Link></li>
        )

}