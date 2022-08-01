import { Router } from "express";
import productoController from "../controllers/productoController.js";


const productoRouter = new Router();
//---1
productoRouter.get("/", productoController.productList);
//---2
productoRouter.get("/:id", productoController.getProductById);
//---3
productoRouter.put("/:id", productoController.editProduct);
//---4
productoRouter.delete("/:id",productoController.deleteProduct);
//---5
productoRouter.delete("/",productoController.deleteProductList);

export { productoRouter };