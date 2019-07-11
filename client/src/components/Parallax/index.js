import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid/index";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Parallax() {
  return (
    <div
      className="parallaxContainer"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <div
        className="Welcome"
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <h1
          style={{
            color: "white",
            margin: "auto",
            textDecorationStyle: "dotted orange"
          }}
        >
          Welcome to LukeWarm
        </h1>
        <h1 style={{ color: "white", margin: "auto" }}>
          Looking to stay warm look no further!
        </h1>

        <Button
          href="/shop"
          style={{
            marginTop: "70px",
            backgroundColor: "white",
            color: "black",
            fontWeight: "Bold"
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Parallax;
