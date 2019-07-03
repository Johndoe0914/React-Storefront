import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Parallax() {
  return (
    <div className="parallaxContainer" style={{ overflowX: "hidden" }}>
      <div className="links">
        <ul
          className="navbar-nav"
          style={{
            display: "inline-block",
            position: "relative"
          }}
        >
          <li className="nav-item" style={{ left: "0px" }}>
            <Link
              to="/shop"
              className={
                window.location.pathname === "/shop"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "black" }}
            >
              Shop
            </Link>
          </li>

          <li className="nav-item" style={{}}>
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "black" }}
            >
              LukeWarm
            </Link>
          </li>

          <li className="nav-item" style={{ right: "0px" }}>
            <Link
              to="/cart"
              className={
                window.location.pathname === "/cart"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "black" }}
            >
              cart(0)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Parallax;
