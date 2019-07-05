const express = require("express");
const moltin = require("moltin");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

let client_id = "S0xpD0ORVe1ZXgwfXIENg3Max12bI6EwLhpRIKCyfK";

/*------------Middleware---------------*/
// same gateway && authentication.. just wrapped in a function
const authenticateMoltin = function(req, res, next) {
  let Moltin = moltin.gateway({
    client_id,
    client_secret: "qpFZui08ykS5nH1EhcZql8Ok8u5pQkLWcMFa5ChIGb"
  });
  Moltin.Authenticate().then(() => {
    req.Moltin = Moltin;
    console.log("user authenticated");
    next();
  });
};
// tell express to use the auth function as middleware on every    // route
app.use(authenticateMoltin);
/*---------------Routes-----------------*/
app.get("/moltin", (req, res) => {
  let { Moltin } = req;
  Moltin.Products.All().then(prods => {
    console.log(prods);
    res.json(prods);
  });
});
app.listen(5000, function() {
  console.log("Ecommerce sample listening on port 5000!");
});
