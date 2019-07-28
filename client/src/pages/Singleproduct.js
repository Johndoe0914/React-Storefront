import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import "./Singleproduct.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

import { GetProduct, AddCart } from "../moltin";

export default class Singleproduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: "",
      productName: "",
      productDescription: "",
      productStock: "",
      productPrice: ""
    };
  }

  componentDidMount() {
    // axios
    //   .get("/v2/products/" + window.location.pathname.split("/")[2])
    //   .then(res => {
    //     const product = res.data.data;
    //     console.log(product);
    //     this.setState({
    //       productId: product.id,
    //       productName: product.name,
    //       productDescription: product.description,
    //       productStock: product.stock,
    //       productPrice: product.meta.display_price.with_tax.formatted
    //     });
    //     console.log(this.state);
    //   });

    GetProduct(window.location.pathname.split("/")[2])
      .then(res => {
        // console.log(res);
        const product = res.data;
        console.log(product);
        this.setState({
          productId: product.id,
          productName: product.name,
          productDescription: product.description,
          productStock: product.meta.stock.availability,
          productPrice: product.meta.display_price.with_tax.formatted
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleAddToCart = (productId, quantity) => {
    console.log(productId, quantity);

    AddCart(productId, quantity)
      .then(res => {
        console.log("items added", res);
        alert("item added");
        document.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    //   axios
    //     .post("/v2/carts/1000/items", (productId, quantity))
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
  };
  render() {
    return (
      <Container fluid>
        <div className="singleProductDisplay">
          <Row>
            <Col size="6">
              <div className="productImage">
                <img
                  src="https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
                  alt="hello"
                />
              </div>
            </Col>

            <Col size="6">
              <div className="productInfo">
                <div className="productName">
                  {this.state.productName ? (
                    <h2>{this.state.productName}</h2>
                  ) : null}
                </div>
                <div className="productDescription">
                  {this.state.productDescription ? (
                    <p>{this.state.productDescription}</p>
                  ) : null}
                </div>
                <div className="stock">
                  {this.state.productStock ? (
                    <p>{this.state.productStock}</p>
                  ) : (
                    <p>out of stock</p>
                  )}
                </div>

                <div className="productPrice">
                  {this.state.productPrice ? (
                    <h4>USD: {this.state.productPrice} </h4>
                  ) : null}
                </div>
              </div>
              <hr />
              <Button
                onClick={() => this.handleAddToCart(this.state.productId, 1)}
                variant="danger"
              >
                Add To Cart
              </Button>
            </Col>
          </Row>
        </div>

        <Row>
          <Col size="12">
            <div className="similarProducts">
              <h1>similar products</h1>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}
