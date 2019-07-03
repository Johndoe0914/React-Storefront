import React, { Component } from "react";
import Parallax from "../components/Parallax/index";
import { Container, Row, Col } from "../components/Grid/index";

export default class Homepage extends Component {
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
        <br />
        <center>
          <h3>Top Picks</h3>
        </center>
        <br />
        <div style={{}}>
          <Row>
            <Col size="5">
              <img
                src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="image"
              />
            </Col>
            <Col size="2" />
            <Col size="5">
              <img
                src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="image"
              />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
