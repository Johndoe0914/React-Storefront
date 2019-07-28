import React, { Component } from "react";
import Button from "react-bootstrap/Button";

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
            <div className="cartProductQuantity">
              <p>{this.props.productQuantity}</p>
            </div>
            <div className="cartproductQuantityPrice">
              <Button variant="success" onClick={this.props.decrement}>
                -
              </Button>{" "}
              <p>{this.props.quantityPrice}></p>{" "}
              <Button variant="success" onClick={this.props.increment}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
