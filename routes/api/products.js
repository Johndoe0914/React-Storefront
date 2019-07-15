const express = require("express");

module.exports = function(app) {
  //Get All Products
  app.get("/v2/products", function(req, res) {
    let { Moltin } = req;
    Moltin.Products.All()
      .then(prods => {
        console.log(prods);
        res.json(prods);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
