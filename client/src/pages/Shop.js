import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import Card from "../components/Card/index";
import "./Shop.css";
import axios from "axios";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
            <h2>
              "Searching to feel your best you've come go the right place"
            </h2>
          </div>
          <div className="productdisplay">
            <Row>
              <Col size="12">
                <div className="ProductWrapper">
                  <span className="products">
                    {this.state.products.length < 0
                      ? null
                      : this.state.products.map(product => (
                          <div className="product">
                            <Card
                              onMouseEnter={this.props.handleMouseEnter}
                              onMouseLeave={this.props.handleMouseLeave}
                              productImage={product.Image}
                              productPrice={product.Price}
                              productName={product.Name}
                            />
                          </div>
                        ))}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
