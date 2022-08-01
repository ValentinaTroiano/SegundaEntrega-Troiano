import { Router } from "express";
import carritoController from "../controllers/cartController.js";

const carritoRouter = new Router();

//---1
carritoRouter.get("/", carritoController.cartList);
//---2
carritoRouter.get("/:id", carritoController.getCartById);
//---3
carritoRouter.get("/:id/productos", carritoController.cartProductList);
//---4
carritoRouter.post("/", carritoController.createNewCart);
//---5
carritoRouter.post("/:id/productos/:id_prod", carritoController.addProductToCart);
//---6
carritoRouter.delete(
  "/:id/productos/:id_prod",
  carritoController.deleteProductFromCart
);
//---7
carritoRouter.delete("/:id", carritoController.emptyCart);

export { carritoRouter };