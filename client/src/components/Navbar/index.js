import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav
      style={{
        boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey"
      }}
      className="navbar navbar-expand-lg navbar-dark bg-transparent"
    >
      <Link className="navbar-brand" to="/">
        LukeWarm
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shop"
              className={
                window.location.pathname === "/shop"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className={
                window.location.pathname === "/cart"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Cart(0)
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
