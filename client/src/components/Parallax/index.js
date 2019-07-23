import React from "react";
import "./style.css";
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
        <div>
          <p className="static-text">Do you want to</p>
          <ul className="dynamic-text">
            <li className="item">look your best</li>
            <li className="item">feel your best</li>
            <li className="item">attract the ladies</li>
          </ul>
        </div>
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
