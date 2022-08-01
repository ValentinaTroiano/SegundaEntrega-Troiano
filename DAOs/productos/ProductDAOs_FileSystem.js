//-----1

import FirebaseContainer from "../../classes/firebaseContainer.js";

class ProductDAOsFirebase extends FirebaseContainer {
  constructor() {
    super("productos");
  }
}

export default ProductDAOsFirebase;