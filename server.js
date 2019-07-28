const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const MoltinGateway = require("@moltin/sdk").gateway;

// const Moltin = MoltinGateway({
//   client_id: "S0xpD0ORVe1ZXgwfXIENg3Max12bI6EwLhpRIKCyfK",
//   client_secret: "qpFZui08ykS5nH1EhcZql8Ok8u5pQkLWcMFa5ChIGb"
// });

/*------------Middleware---------------*/
// same gateway && authentication.. just wrapped in a function
const authenticateMoltin = (req, res, next) => {
  let Moltin = MoltinGateway({
    client_id: "S0xpD0ORVe1ZXgwfXIENg3Max12bI6EwLhpRIKCyfK",
    client_secret: "qpFZui08ykS5nH1EhcZql8Ok8u5pQkLWcMFa5ChIGb"
  });
  Moltin.Authenticate().then(() => {
    req.Moltin = Moltin;
    console.log("user authenticated");
    next();
  });
};
const PORT = 5000;
// tell express to use the auth function as middleware on every    // route
app.use(authenticateMoltin);
require("./routes/api/products")(app);
// require("./routes/api/cart")(app);

/*---------------Routes-----------------*/
// app.get("/moltin", (req, res) => {
//   let { Moltin } = req;
//   Moltin.Products.All().then(prods => {
//     console.log(prods);
//     res.json(prods);
//   });
// });

app.listen(PORT, function() {
  console.log("Ecommerce sample listening on " + PORT);
});
