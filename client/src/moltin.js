const MoltinGateway = require("@moltin/sdk").gateway;
const axios = require("axios");

let client_id = "S0xpD0ORVe1ZXgwfXIENg3Max12bI6EwLhpRIKCyfK";

const Moltin = MoltinGateway({
  client_id,
  client_secret: "qpFZui08ykS5nH1EhcZql8Ok8u5pQkLWcMFa5ChIGb"
});

const GetImplicitToken = (client_id, grant_type) => {
  axios.post("https://api.moltin.com/oauth/access_token").then((res, err) => {
    console.log(res);
  });
};

GetImplicitToken(client_id, "implicit");
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
