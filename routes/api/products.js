const express = require("express");

module.exports = function(app) {
  //Get All Products
  app.get("/v2/products", function(req, res) {
    let { Moltin } = req;
    Moltin.Products.With("main_image")
      .All()
      .then(prods => {
        console.log(prods);
        res.json(prods);
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Get One product

  app.get("/v2/products/:id", function(req, res) {
    let { Moltin } = req;
    Moltin.Products.Get(req.params.id)
      .then(prods => {
        console.log(prods);
        res.json(prods);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
//  lloking to feel your best youve come to the right place
