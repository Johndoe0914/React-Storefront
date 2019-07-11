import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="">
        <img className="card" src={this.props.productimage} alt="eflf" />;
      </div>
    );
  }
}
