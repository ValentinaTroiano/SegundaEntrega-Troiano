let cartDAO;

switch (process.env.DB_ENV) {
//--------1

case "json":
const { default: CartDAOFileSystem } = await import(
  "./CartDAO_FileSystem.js"
);
cartDAO = new CartDAOFileSystem("cart");
console.log("Set FileSystem as Database for Carts!");
break;

//--------2
case "mongodb":
const { default: CartDAOMongoDB } = await import("./CartDAO_MongoDB.js");
cartDAO = new CartDAOMongoDB();
console.log("Set MongoDB as Database for Carts!");
break;

//--------3
case "firebase":
const { default: CartDAOFirebase } = await import("./CartDAO_Firebase.js");
cartDAO = new CartDAOFirebase();
console.log("Set Firebase as Database for Carts!");
break;
}

export { cartDAO };