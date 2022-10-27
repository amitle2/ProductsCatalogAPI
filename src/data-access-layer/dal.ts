import ProductModel from "../models/product-model";
import { readFile, writeFile } from "fs/promises";


async function getAllProductsAsync(): Promise<ProductModel[]> {
    const content: string = await readFile(global.config.database.file, "utf-8");
    const products: ProductModel[] = JSON.parse(content);
    return products;
}

async function saveAllProductsAsync(products: ProductModel[]): Promise<void> {
    const content: string = JSON.stringify(products, null, 4);
    await writeFile(global.config.database.file, content);
}

export default {
    getAllProductsAsync, 
    saveAllProductsAsync
};