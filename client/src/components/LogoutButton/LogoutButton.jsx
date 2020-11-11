import React from "react"
import { useHistory } from "react-router-dom"
import "./logoutbutton.css"
import { Link } from "react-router-dom"

export default function HomeButton(){

    const history = useHistory()

    function handleLogout(){

        const logOut = async function(){
            localStorage.removeItem("jwt")
            await history.push("/")

        }

        logOut();

    }

    return(
        <li className="tab"><Link to="/">Logout</Link></li>
        )

}