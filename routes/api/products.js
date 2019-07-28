// const express = require("express");

module.exports = function(app) {
  //   //Get All Products
  //   app.get("/v2/products", function(req, res) {
  //     let { Moltin } = req;
  //     Moltin.Products.With("main_image")
  //       .All()
  //       .then(prods => {
  //         console.log(prods);
  //         res.json(prods);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   });

  //   //Get One product

  //   app.get("/v2/products/:id", function(req, res) {
  //     let { Moltin } = req;
  //     Moltin.Products.Get(req.params.id)
  //       .then(prods => {
  //         console.log(prods);
  //         res.json(prods);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   });
  const GetProducts = () =>
    Moltin.Products.With("files, main_images, collections").All();

  const GetProduct = ID => Moltin.Products.Get(ID);

  const GetCategories = () => Moltin.Categories.With("products").All();

  const GetCategory = ID => Moltin.Categories.Get(ID);

  const GetCollections = () => Moltin.Collections.With("products").All();

  const GetBrands = () => Moltin.Brands.All();

  const GetFile = ID => Moltin.Files.Get(ID);

  const AddCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity);

  const UpdateCartPlus = (ID, quantity) =>
    Moltin.Cart().UpdateItemQuantity(ID, quantity + 1);

  const UpdateCartMinus = (ID, quantity) =>
    Moltin.Cart().UpdateItemQuantity(ID, quantity - 1);

  const UpdateCart = (ID, quantity) =>
    Moltin.Cart().UpdateItemQuantity(ID, quantity);

  const GetCartItems = () => Moltin.Cart().Items();

  const Checkout = data => Moltin.Cart().Checkout(data);

  const GetOrder = ID => Moltin.Orders.Get(ID);

  const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

  const DeleteCart = () => Moltin.Cart().Delete();
};
//  lloking to feel your best youve come to the right place

// export const GetProducts = () =>
//   Moltin.Products.With("files, main_images, collections").All();

// export const GetProduct = ID => Moltin.Products.Get(ID);

// export const GetCategories = () => Moltin.Categories.With("products").All();

// export const GetCategory = ID => Moltin.Categories.Get(ID);

// export const GetCollections = () => Moltin.Collections.With("products").All();

// export const GetBrands = () => Moltin.Brands.All();

// export const GetFile = ID => Moltin.Files.Get(ID);

// export const AddCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity);

// export const UpdateCartPlus = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity + 1);

// export const UpdateCartMinus = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity - 1);

// export const UpdateCart = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity);

// export const GetCartItems = () => Moltin.Cart().Items();

// export const Checkout = data => Moltin.Cart().Checkout(data);

// export const GetOrder = ID => Moltin.Orders.Get(ID);

// export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

// export const DeleteCart = () => Moltin.Cart().Delete();
