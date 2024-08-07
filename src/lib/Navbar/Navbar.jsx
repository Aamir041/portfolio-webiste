import "./Navbar.css"
import { useState } from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    {"< AS />"}
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Introduction
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/projects"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/blogs"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;