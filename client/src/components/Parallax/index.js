import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid/index";
import { Link } from "react-router-dom";

function Parallax() {
  return (
    <div
      className="parallaxContainer"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
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
              style={{ color: "black", fontStyle: "italic" }}
            >
              Ice Box
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
      <center>
        <div className="Welcome">
          <h1 style={{ color: "red", margin: "auto" }}>Welcome to ICEBOX</h1>
          <h1 style={{ color: "red", margin: "auto" }}>
            Here for all your jewlary needs
          </h1>
        </div>
      </center>
    </div>
  );
}

export default Parallax;
