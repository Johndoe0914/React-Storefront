import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import axios from "axios";
import CartCard from "../components/CartCard/index";
import { GetCartItems, UpdateCartMinus, UpdateCartPlus } from "../moltin";
import "./Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [{}],
      totalPrice: 200
    };
  }

  componentDidMount() {
    // axios
    //   .get("/v2/products")
    //   .then(res => {
    //     const data = res.data.data;
    //     console.log(data);
    //     this.setState({ cartProducts: data });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    GetCartItems()
      .then(res => {
        this.setState({ cartProducts: res.data });
        console.log("cart items", res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleProductdecrement = (productid, quantity) => {
    UpdateCartMinus(productid, quantity).then(res => {
      document.location.reload();
    });
  };

  handleProductincrement = (productid, quantity) => {
    UpdateCartPlus(productid, quantity).then(res => {
      document.location.reload();
    });
  };
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
                {this.state.cartProducts.map(product => (
                  <CartCard
                    productName={product.name}
                    productQuantity={product.quantity}
                    decrement={() => {
                      this.handleProductdecrement(product.id, 1);
                    }}
                    increment={() => {
                      this.handleProductincrement(product.id, 1);
                    }}
                    quantityPrice={product.price}
                  />
                ))}

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
