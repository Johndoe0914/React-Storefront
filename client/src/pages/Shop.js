import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import Card from "../components/Card/index";
import "./Shop.css";
import axios from "axios";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {
        image:
          "https://cdn.shopify.com/s/files/1/1293/3059/products/shopping_9a4d78de-a960-455e-b6d3-c65d976cc3f7_300x300.jpg?v=1488077708"
      },
      category: "golf"
    };
  }

  // componentDidMount() {
  //   axios.get("/moltin", (req, res) => {
  //     let { Moltin } = req;
  //     Moltin.Products.All().then(prods => {
  //       console.log(prods);
  //       this.setState({ products: prods });
  //     });
  //   });
  // }
  render() {
    return (
      <div className="wrappingContainer">
        <Container>
          <div className="productCategory">
            <h2>{this.state.category}</h2>
            <img
              src="https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
              alt="jok/>"
            />
          </div>
          <div className="productDisplay">
            <Row>
              <Col size="12">
                {/* Add product card component */}

                <div className="ProductWrapper">
                  <Card productimage="https://cdn.shopify.com/s/files/1/1293/3059/products/shopping_9a4d78de-a960-455e-b6d3-c65d976cc3f7_300x300.jpg?v=1488077708" />
                  <Card productimage="https://cdn.shopify.com/s/files/1/1293/3059/products/shopping_9a4d78de-a960-455e-b6d3-c65d976cc3f7_300x300.jpg?v=1488077708" />
                  <Card productimage="https://cdn.shopify.com/s/files/1/1293/3059/products/shopping_9a4d78de-a960-455e-b6d3-c65d976cc3f7_300x300.jpg?v=1488077708" />
                  <Card productimage="https://cdn.shopify.com/s/files/1/1293/3059/products/shopping_9a4d78de-a960-455e-b6d3-c65d976cc3f7_300x300.jpg?v=1488077708" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
