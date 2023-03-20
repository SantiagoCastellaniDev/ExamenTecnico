import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:Product;

  constructor() { }

  ngOnInit(): void {
    this.getProductOfSession()
  }

  getProductOfSession(){
    const prod = sessionStorage.getItem("productDetail");
    if (prod!=null){
      this.product = JSON.parse(prod);
    }    
  }

}
