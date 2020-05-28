import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return(

<ul className="mr-5 justify-content-center">
    <li className="list-group-item">
        <Link to="/register">Register</Link>
    </li>
    <li className="list-group-item">
        <Link to="/login">Login</Link>
    </li>
    <li className="list-group-item">
        <Link to="/plantform">Add a New Plant</Link>
    </li>
    <li className="list-group-item">
        <Link to="/plantsdisplay">Display Your Current Plants</Link>
    </li>
</ul> )
}
