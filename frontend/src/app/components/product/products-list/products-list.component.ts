import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productList:/*Product[]=[]*/any;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productsService.getAll().subscribe({
      next: (res) => {
        this.productList = res;
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{}
    })
  }


}
