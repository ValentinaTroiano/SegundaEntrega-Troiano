//----2

import MongoDBContainer from "../../classes/mongodbContainer.js";

class CartDAOsMongoDB extends MongoDBContainer {
  constructor() {
    super("carrito", {
      id: { type: Number, required: true },
      productos: { type: Array, required: false },
    });
  }
}

export default CartDAOsMongoDB;