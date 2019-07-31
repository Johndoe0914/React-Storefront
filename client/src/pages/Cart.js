import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import axios from "axios";
import CartCard from "../components/CartCard/index";
import { GetCartItems, UpdateCartMinus, UpdateCartPlus } from "../moltin";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Cart.css";
import { copyFile } from "fs";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [{}],
      totalPrice: "total price"
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
        console.log("Cartitemsforprice");
        this.setState({
          cartProducts: res.data,
          totalPrice: res.meta.display_price.with_tax.formatted
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleProductdecrement = (productid, quantity) => {
    UpdateCartMinus(productid, quantity).then(res => {
      GetCartItems()
        .then(res => {
          this.setState({
            cartProducts: res.data,
            totalPrice: res.meta.display_price.with_tax.formatted
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  handleProductincrement = (productid, quantity) => {
    UpdateCartPlus(productid, quantity).then(res => {
      GetCartItems()
        .then(res => {
          this.setState({
            cartProducts: res.data,
            totalPrice: res.meta.display_price.with_tax.formatted
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
  render() {
    return (
      <div className="window">
        <Container fluid>
          <Row>
            <Col size="sm-4 md-6 lg-12">
              <div className="cart">
                <center>
                  {" "}
                  <h1>Your Cart Items</h1>
                </center>
              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col size="sm-4 md-6 lg-12">
              <div className="cartContainer">
                <Table responsive="md">
                  <thead>
                    <th>Item name</th>
                    <th>Item quantity</th>
                    <th>Item image</th>
                  </thead>
                  {this.state.cartProducts.map(product => (
                    <div>
                      <tbody>
                        <tr>
                          <td>{product.name}</td>
                          <td>
                            <Button
                              onClick={() => {
                                this.handleProductdecrement(
                                  product.id,
                                  product.quantity
                                );
                              }}
                            >
                              -
                            </Button>
                            {product.quantity}
                            <Button
                              onClick={() => {
                                this.handleProductincrement(
                                  product.id,
                                  product.quantity
                                );
                              }}
                            >
                              +
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  ))}

                  <br />
                  <br />
                  <div className="totalPrice">
                    <h2>
                      Total Price: <hr />
                      {this.state.totalPrice}
                    </h2>
                  </div>
                  <Button href={"/checkout"} variant="danger">
                    Checkout ->
                  </Button>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
