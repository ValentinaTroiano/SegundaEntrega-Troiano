import { productoDAOs } from "../DAOs/productos/index.js";

const productoController = {
  //---1
  productList: async (req, res) => {
    try {
      const allProducts = await productoDAOs.getAll();
      res.json(allProducts);
    } catch (error) {
      console.log(`ProductList method: ${error}`);
    }
  },
//---2
  getProductById: async (req, res) => {
    try {
      const prodId = req.params.id;
      const productFound = await productoDAOs.getById(prodId);

      if (!productFound) {
        res.send({ error: "Product not found." });
      } else {
        res.json(productFound);
      }
    } catch (error) {
      console.log(`GetProductById method: ${error}`);
    }
  },
//---3
  editProduct: async (req, res) => {
    try {
      const prodId = req.params.id;
      const productFound = await productoDAOs.getById(prodId);

      if (!productFound) {
        res.send({ error: "Product not found." });
      } else {
        const editedProduct = {
          id: productFound.id,
          nombre: req.body.nombre ? req.body.nombre : productFound.nombre,
          descripcion: req.body.descripcion
            ? req.body.descripcion
            : productFound.descripcion,
          foto_url: req.body.foto_url
            ? req.body.foto_url
            : productFound.foto_url,
          precio: req.body.precio ? req.body.precio : productFound.precio,
          stock: req.body.stock ? req.body.stock : productFound.stock,
        };

        await productoDAOs.editById(editedProduct, prodId);

        res.json(editedProduct);
      }
    } catch (error) {
      console.log(`EditProduct method: ${error}`);
    }
  },
//----4
  deleteProduct: async (req, res) => {
    try {
      const prodId = req.params.id;
      const response = await productoDAOs.deleteById(prodId);

      if (!response) {
        res.send(`The product with ID ${prodId} does not exist.`);
      } else {
        res.send(`The product with ID ${prodId} has been removed.`);
      }
    } catch (error) {
      console.log(`DeleteProduct method: ${error}`);
    }
  },
//----5
  deleteProductList: async (req, res) => {
    try {
      await productoDAOs.deleteAll();
      res.send(`All products have been removed.`);
    } catch (error) {
      console.log(`DeleteProductList method: ${error}`);
    }
  },
};

export default productoController;