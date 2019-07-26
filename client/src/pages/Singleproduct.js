import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import "./Singleproduct.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
    console.log(window.location.pathname.split("/")[2]);
    axios
      .get("/v2/products/" + window.location.pathname.split("/")[2])
      .then(res => {
        const product = res.data.data;
        console.log(product);

        this.setState({
          productId: product.id,
          productName: product.name,
          productDescription: product.description,
          productStock: product.stock,
          productPrice: product.meta.display_price.with_tax.formatted
        });
        console.log(this.state);
      });
  }
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
                  {this.state.productStock ? <p>in Stock:</p> : null}
                  {this.state.productStock ? <p>Yes</p> : null}
                </div>

                <div className="productPrice">
                  {this.state.productPrice ? (
                    <h4>USD: {this.state.productPrice} </h4>
                  ) : null}
                </div>
              </div>
              <hr />
              <Button variant="danger">Add To Cart</Button>
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
