//-------2

import MongoDBContainer from "../../classes/mongodbContainer.js";

class ProductDAOsMongoDB extends MongoDBContainer {
  constructor() {
    super("productos", {
      id: { type: Number, required: true },
      nombre: { type: String, required: true },
      descripcion: { type: String, required: true },
      precio: { type: Number, required: true },
      stock: { type: Number, required: true },
    });
  }
}

export default ProductDAOsMongoDB;