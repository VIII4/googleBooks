import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark stylish-color-dark">
      <span className="navbar-brand">Google Books</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to={"/"}>
              Search
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to={"/saved"}>
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
