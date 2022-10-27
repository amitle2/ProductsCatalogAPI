import express, { Request, Response, NextFunction} from "express";
import logic from "../business-logic-layer/products-logic"
import ProductModel from "../models/product-model";

const router = express.Router();

router.get("/api/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
    const products: ProductModel[] = await logic.getAllProductsAsync();
    if (Math.random() < 0.5) throw new Error("Some Demo Exception...");
    response.json(products);
    }
    catch(err) {
        next(err);
    }
});

router.get("/api/products/:id", async (request: Request, response: Response) => {
    const id: number  = +request.params.id;
    const products = await logic.getOneProductAsync(id);
    response.json(products);
});

router.post("/api/products", async (request: Request, response: Response) => {
    const productToAdd: ProductModel = request.body;
    const addedProduct: ProductModel = await logic.addProductAsync(productToAdd);
    response.status(201).json(addedProduct);
});

router.put("/api/products/:id", async (request: Request, response: Response) => {
    const id: number  = +request.params.id;
    request.body.id = id;
    const productToUpdate: ProductModel = request.body;
    const updatedProduct: ProductModel = await logic.updateFullProductAsync(productToUpdate);
    response.json(updatedProduct);
});


export default router;