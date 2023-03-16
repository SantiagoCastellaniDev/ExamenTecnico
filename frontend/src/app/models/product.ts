export class Product {
    idProduct: string;
    name: string;
    description:string;
    price:number;
    img_Product:string;
  
    constructor(idProduct:string,name:string,description:string,price:number,img_Product:string) {
      this.idProduct = idProduct;
      this.name = name;
      this.description = description;
      this.price = price;
      this.img_Product = img_Product
    }
}