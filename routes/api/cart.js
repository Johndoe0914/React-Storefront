const express = require("express");
const reference = "9283";
module.exports = function(app) {
  app.post("/v2/carts/1000/items", function(req, res) {
    let { Moltin } = req;
    let productId = req.body.productId;
    let quantity = req.body.quantity;

    Moltin.Cart(1000)
      .AddProduct(productId, quantity)
      .then(cart => {
        console.log(cart);
        res.json(cart);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
//  lloking to feel your best youve come to the right place
