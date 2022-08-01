import { productDAO } from "../DAOs/productos/index.js";
import { cartDAO } from "../DAOs/carrito/index.js";

//----------* CART CONTROLLER *----------//
const carritoController = {
  //---1
  cartList: async (req, res) => {
    try {
      const allCarts = await cartDAO.getAll();
      res.json(allCarts);
    } catch (error) {
      console.log(`CartList method: ${error}`);
    }
  },

//---2
  getCartById: async (req, res) => {
    try {
      const cartId = req.params.id;
      const cartFound = await cartDAO.getById(cartId);

      if (!cartFound) {
        res.send({ error: "Cart not found." });
      } else {
        res.json(cartFound);
      }
    } catch (error) {
      console.log(`GetCartById method: ${error}`);
    }
  },

//---3
  cartProductList: async (req, res) => {
    try {
      const cartId = req.params.id;
      const cartFound = await cartDAO.getById(cartId);

      if (!cartFound) {
        res.send({ error: "Cart not found." });
      } else {
        res.json(cartFound.productos);
      }
    } catch (error) {
      console.log(`CartProductList method: ${error}`);
    }
  },

//---4
  createNewCart: async (req, res) => {
    try {
      const allCarts = await cartDAO.getAll();

      const getNewId = () => {
        let lastID = 0;
        if (allCarts && allCarts.length) {
          lastID = allCarts[allCarts.length - 1].id;
        }
        return Number(lastID) + 1;
      };

      const newCart = {
        id: getNewId(),
        productos: [],
      };

      await cartDAO.addItem(newCart);
      res.json(newCart.id);
    } catch (error) {
      console.log(`CreateNewCart method: ${error}`);
    }
  },

//---5
  addProductToCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const prodId = req.params.id_prod;

      const cartFound = await cartDAO.getById(cartId);
      const productFound = await productDAO.getById(prodId);

      if (!cartFound) {
        res.send({ error: "Cart not found." });
      } else if (!productFound) {
        res.send({ error: "Product not found." });
      } else {
        await cartDAO.addItemInto(cartId, productFound);
        const updatedCart = await cartDAO.getById(cartId);
        res.json(updatedCart);
      }
    } catch (error) {
      console.log(`AddProductToCart method: ${error}`);
    }
  },

//---6
  deleteProductFromCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const prodId = req.params.id_prod;

      const cartFound = await cartDAO.getById(cartId);
      const productFound = await productDAO.getById(prodId);

      if (!cartFound) {
        res.send({ error: "Cart not found." });
      } else if (!productFound) {
        res.send({ error: "Product not found." });
      } else {
        await cartDAO.removeItemFrom(cartId, prodId);
        const updatedCart = await cartDAO.getById(cartId);
        res.json(updatedCart);
      }
    } catch (error) {
      console.log(`DeleteProductFromCart method: ${error}`);
    }
  },

//---7
  emptyCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const cartFound = await cartDAO.getById(cartId);

      if (!cartFound) {
        res.send({ error: "Cart not found." });
      } else {
        await cartDAO.emptyContainer(cartId);
        const updatedCart = await cartDAO.getById(cartId);
        res.json(updatedCart);
      }
    } catch (error) {
      console.log(`EmptyCart method: ${error}`);
    }
  },
};

//----------* EXPORTS CONTROLLER *----------//
export default carritoController;