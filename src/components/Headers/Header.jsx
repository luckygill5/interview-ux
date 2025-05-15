import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const HeaderMenus = [
    { path: "/About", title: "About Us" },
    { path: "/Services", title: "Services" },
      { path: "/Contact", title: "Contact" },
  ];
  return (
    <>
      <header>
        <div className="logo_cont">
          <span className="logo-text">
            <Link to="/">TechWave Solution</Link>
          </span>
        </div>
        <div className="navigation-menus">
          <nav>
            <ul>
                {
                    HeaderMenus.length > 0 &&
                    HeaderMenus.map(data => <li><Link className="nav-link" to={data.path}>{data.title}</Link></li>)
                }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
