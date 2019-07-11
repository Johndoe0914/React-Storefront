import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar/index";
import Cart from "./pages/Cart";
import Singleproduct from "./pages/Singleproduct";
import Checkout from "./pages/Checkout";
import Orderconfirmation from "./pages/Orderconfirmation";
import Nomatch from "./pages/NoMatch";
import Footer from "./components/Footer/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Singleproduct} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/orderConfirmation"
            component={Orderconfirmation}
          />
          <Route exact path="*" component={Nomatch} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
