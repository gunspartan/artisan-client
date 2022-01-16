import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavItems from "./NavItems";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top Nav">
      <div class="container-fluid">
        <Link class="navbar-brand logo" to="/">
          <img name="home" src="/img/logos/artisan_logo_bl.png" alt="" />
        </Link>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {NavItems.map((navItem, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link"
                    name={navItem.name}
                    aria-current="page"
                    exact
                    to={navItem.url}
                    activeClassName="active"
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                name="contact"
                className="nav-link"
                aria-current="page"
                exact
                to="/contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
