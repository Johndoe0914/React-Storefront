import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import "./Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: true,
      totalPrice: 200
    };
  }
  render() {
    return (
      <div className="window">
        <Container fluid>
          <Row>
            <Col size="sm-12 md-6 lg-12">
              <div className="cart">
                <h1>Your Cart Items</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-4 md-6 lg-12">
              <div className="cartContainer">
                {/* {/* {this.state.cartProducts.map(product => ( */}
                <div className="cartProduct">
                  <div className="cartProductName">
                    {/* <h3>{product.name}</h3> */}
                    <h1>hello</h1>
                  </div>
                  <div className="cartProductQuantity">
                    {/* <p>{product.quantity}</p> */}
                    <h1>hello</h1>
                  </div>
                  <div className="cartproductQuantityPrice">
                    {/* <p>{product.quantityPrice}></p> */}
                    <h1>5555</h1>
                  </div>
                </div>

                <div className="totalPrice">
                  <h2>{this.state.totalPrice}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
