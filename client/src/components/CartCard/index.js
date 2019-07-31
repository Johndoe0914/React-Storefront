import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

export default class cartCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="cartProduct">
          <div style={{ display: "inline" }}>
            <div className="cartProductName">
              <h3>{this.props.productName}</h3>
            </div>
            <Button
              style={{ display: "inline" }}
              variant="success"
              onClick={this.props.decrement}
            >
              -
            </Button>
            <div className="cartProductQuantity">
              <p>{this.props.productQuantity}</p>
            </div>
            <Button
              style={{ display: "inline" }}
              variant="success"
              onClick={this.props.increment}
            >
              +
            </Button>
            <div className="cartproductQuantityPrice">
              <p>{this.props.quantityPrice}</p>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
