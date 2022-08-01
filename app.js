//hecho en clase
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("Base de datos conectada");
//
//


import Server from "./server/index.js";

const server = new Server();

server.listen();