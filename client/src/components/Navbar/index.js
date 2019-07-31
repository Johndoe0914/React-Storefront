import { Link } from "react-router-dom";
import "./style.css";
import React, { Component } from "react";

import { GetCartItems } from "../../moltin";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartLength: ""
    };
  }

  componentDidMount() {
    GetCartItems()
      .then(res => {
        const length = res.data.length;
        console.log("length", length);
        this.setState({ cartLength: length });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <nav
        style={{
          boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey"
        }}
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <Link className="navbar-brand" to="/">
          LukeWarm
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shop"
                className={
                  window.location.pathname === "/shop"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={
                  window.location.pathname === "/cart"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Cart({this.state.cartLength})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
