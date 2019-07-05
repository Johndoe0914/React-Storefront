import React, { Component } from "react";
import Parallax from "../components/Parallax/index";
import { Container, Row, Col } from "../components/Grid/index";
import SwiperCarousel from "../components/SwiperCarousel/index";
import "./Homepage.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1WAPAnbJ_izw1gFzLV1FsloWvJZzYRkPVTIar8LNq7p-3vbrZw"
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
        <div className="bestSellerImages" style={{ overflowX: "hidden" }}>
          <Row>
            <Col size="12">{/* <SwiperCarousel /> */}</Col>
          </Row>
        </div>
        <hr />
      </Container>
    );
  }
}
