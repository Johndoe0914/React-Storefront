import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid/index";
import Card from "../components/Card/index";
import { Link } from "react-router-dom";
import { GetProducts } from "../moltin";
import "./Shop.css";
import axios from "axios";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      realProducts: [{}],
      productImages: [{}],

      hover: false
    };
  }

  componentDidMount() {
    // axios
    //   .get("/v2/products")
    //   .then(res => {
    //     let data = res.data.data;
    //     console.log(data[0].meta.display_price.with_tax.amount / 100);
    //     this.setState({ realProducts: data });
    //     console.log(this.state.realProducts);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });\

    GetProducts()
      .then(res => {
        console.log(res.included);
        const dataImages = res.included;
        const data = res.data;
        this.setState({ realProducts: data, productImages: dataImages });
        console.log("state", this.state);
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
                      : this.state.realProducts.map(product => (
                          <div key={product.id} className="product">
                            <Link to={"/product/" + product.id}>
                              <Card
                                key={product.id}
                                // productImage={}
                                // productPrice={
                                //   product.meta.display_price.with_tax.amount /
                                //   100
                                // }
                                productName={product.name}
                              />
                            </Link>
                          </div>
                        ))}
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
