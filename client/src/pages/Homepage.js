import React, { Component } from "react";
import Parallax from "../components/Parallax/index";
import { Container, Row, Col } from "../components/Grid/index";
import SwiperCarousel from "../components/SwiperCarousel/index";
import "./Homepage.css";
import product from "../nodeJS.json";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: product
    };
  }

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
        <div className="" style={{ overflowX: "hidden" }}>
          <Row>
            <Col size="12">
              <div className="trendingProducts">
                <div className="productDisplay">
                  <SwiperCarousel productlist={this.state.productList} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
      </Container>
    );
  }
}
