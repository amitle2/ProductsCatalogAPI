class ProductModel {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public image: string;

    public constructor(product: ProductModel) {
        
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.image = product.image;

    }

}

export default ProductModel;