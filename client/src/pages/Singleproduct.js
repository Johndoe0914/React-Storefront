import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import "./Singleproduct.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class Singleproduct extends Component {

  componentDidMount(){
    axios.get("/v2/products/" + )
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
                <div classname="productName">
                  <h2>Lamp</h2>
                </div>
                <div className="productDescription">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="stock">In Stock: Yes</div>

                <div className="productPrice">
                  <del>
                    <h4> usd $20.00</h4>
                  </del>
                  <h4>Your price: usd $10.00</h4>
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
