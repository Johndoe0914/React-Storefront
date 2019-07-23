import React, { Component } from "react";
import Parallax from "../components/Parallax/index";
import { Container, Row, Col } from "../components/Grid/index";
// import axios from "axios";

import SwiperCarousel from "../components/SwiperCarousel/index";
import "./Homepage.css";

export default class Homepage extends Component {
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
      ]
    };
  }

  // componentWillMount() {
  //   console.log("componentwilMount");
  //   axios
  //     .get("/v2/products")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <Container fluid>
        <div style={{ margin: "0px" }}>
          <Row>
            <Col size="12">
              <Parallax />
            </Col>
          </Row>
        </div>
        <hr />
        <center>
          <h3 style={{ color: "white" }}>Trending Items</h3>
        </center>
        <hr />
        <div className="">
          <Row>
            <Col size="12">
              <SwiperCarousel productlist={this.state.products} />
            </Col>
          </Row>
        </div>
        <hr />
      </Container>
    );
  }
}
