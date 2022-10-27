import ProductModel from "../models/product-model";
import dal from "../data-access-layer/dal";

async function getAllProductsAsync(): Promise<ProductModel[]> {
    const products: ProductModel[] = await dal.getAllProductsAsync();
    return products;
}

async function getOneProductAsync(id: number): Promise<ProductModel> {
    const products: ProductModel[] = await dal.getAllProductsAsync();
    const product: ProductModel = products.find(p => p.id === id);
    return product;
}

async function addProductAsync(product: ProductModel): Promise<ProductModel> {
    const products: ProductModel[] = await dal.getAllProductsAsync();
    const newId: number = products.reduce((max, p) => p.id > max.id ? p: max).id +1;
    product.id = newId;
    products.push(product);
    await dal.saveAllProductsAsync(products);
    return product;
}

async function updateFullProductAsync(product: ProductModel): Promise<ProductModel> {
    const products: ProductModel[] = await dal.getAllProductsAsync();
    const index: number = products.findIndex(p => p.id === product.id);
    products[index] = product;
    await dal.saveAllProductsAsync(products);
    return product;
}

export default {
    getAllProductsAsync,
    getOneProductAsync,
    addProductAsync,
    updateFullProductAsync
};