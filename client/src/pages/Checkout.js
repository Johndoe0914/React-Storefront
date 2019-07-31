import React, { Component } from "react";
import Form from "../components/Form/index";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <center>
          <h2 style={{ marginTop: "60px" }}>
            Please provide shipping information
          </h2>
          <hr />
        </center>
        <Form />
      </div>
    );
  }
}
