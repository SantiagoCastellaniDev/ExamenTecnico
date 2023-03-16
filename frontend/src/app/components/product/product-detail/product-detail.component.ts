import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product|any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProductOfSession()
  }

  getProductOfSession(){
    const prod = sessionStorage.getItem("productDetail");
    if (prod!=null){
      this.product = JSON.parse(prod);
      console.log(this.product)
    }    
  }

  addProductToCart(product:Product){
    console.log(product)
  }


}
