import React, { Component } from "react";
import "./style.css";

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
      <div className="card">
        <div className="img-container">
          <img src={this.props.productImage} alt="product" />
        </div>

        <div className="productInfo">
          <p style={{ color:"black"}}>
            {this.props.productName}
            <br />${this.props.productPrice}
          </p>
        </div>
      </div>
    );
  }
}
