import React from "react";
import "./Header.scss";
// import Link from "react-bootstrap"
 

function Header() {
return (
    <>
    <header>
        <div className="logo_cont">
            <span className="logo-text">TechWave Solution</span>
        </div>
        <div className="navigation-menus">
            <nav>
                <ul>
                    <li>
                        <a href="/About Us">About us</a>
                    </li>
                     <li>
                        <a to="/Services"> Services</a>
                    </li>
                   <li>
                        <a to="/Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
);
}

export default Header;