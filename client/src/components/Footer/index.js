import React, { Component } from "react";
import { Container, Row, Col } from "../Grid/index";
import { Link } from "react-router-dom";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container fluid>
          <Row>
            <Col size="4" />
            <Col size="4" />
            <Col size="4">
              <div style={{ marginTop: "30px" }}>
                <Link to="/shop">
                  <h6 style={{ color: "black" }}>Shop</h6>
                </Link>
                <Link to="/cart">
                  <h6 style={{ color: "black" }}>Cart(0)</h6>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <div className="copyright">Copyright @ 2019 Lukewarm .</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
