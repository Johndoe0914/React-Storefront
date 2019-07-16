import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  handleMouseEnter = e => {
    this.setState({ hover: true });
  };
  handleMouseLeave = e => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <div
        className="card"
        style={{
          position: "relative",
          backgroundImage: `url(${this.props.productImage})`,
          width: "200px",
          height: "190px",
          padding: "30px"
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="productInfo">
          <h3>
            {this.props.productName}, {this.props.productPrice}
          </h3>
        </div>
      </div>
    );
  }
}
