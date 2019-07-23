import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import Card from "../components/Card/index";
import { Redirect } from "react-router-dom";
import "./Shop.css";
import axios from "axios";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      realProducts: [{}],

      products: [
        {
          Name: "Cheese",
          Price: 2.5,
          Location: "Refrigerated foods",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        },
        {
          Name: "Crisps",
          Price: 3,
          Location: "the Snack isle",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        },
        {
          Name: "Pizza",
          Price: 4,
          Location: "Refrigerated foods",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        },
        {
          Name: "Chocolate",
          Price: 1.5,
          Location: "the Snack isle",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        },
        {
          Name: "Self-raising flour",
          Price: 1.5,
          Location: "Home baking",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        },
        {
          Name: "Ground almonds",
          Price: 3,
          Location: "Home baking",
          Image:
            "https://www.bubblesoflaguna.com/thumbnail/ikea-kitchen-wall-lamps-100-ikea-musik-wall-lamp-previous-ikea-musik-wall-lamp-hd_1_15872-10.jpg"
        }
      ],

      hover: false
    };
  }

  componentDidMount() {
    axios
      .get("/v2/products")
      .then(res => {
        let data = res.data.data;
        this.setState({ realProducts: data });
        console.log(this.state.realProducts);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="wrappingContainer">
        <Container>
          <div className="productCategory">
            <h2>All products</h2>
          </div>
          <div className="productdisplay">
            <Row>
              <Col size="12">
                <div className="ProductWrapper">
                  <div className="products">
                    {this.state.realProducts.length < 0
                      ? null
                      : Object.keys(this.state.realProducts).map(
                          (value, product) => (
                            <div key={product.id} className="product">
                              <Card
                                onClick={() => (
                                  <Redirect to={"/product/" + product.id} />
                                )}
                                key={product.id}
                                productImage={product.image}
                                // productPrice={product[value].price}
                                productName={product.name}
                              />
                            </div>
                          )
                        )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
