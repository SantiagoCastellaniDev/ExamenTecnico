import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productList:Product[]=[];
  arrayCart:Product[]=[];
  producto:string="";
  cantProducts:number=0;
  
  alert:boolean=false;

  constructor(private productsService:ProductsService, private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
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

  navigateTo(event:Event,id:string,product:Product){
    event.preventDefault();
    event.stopPropagation();
    console.log('Se hizo clic en el enlace.');
    console.log(id);
    this.producto=JSON.stringify(product);    
    sessionStorage.setItem("productDetail",this.producto)
    this.router.navigateByUrl(`/product/detail/${id}`)
  }

  addToCart(product:Product){
    this.cartService.addProductToCart(product);
    this.cantProducts = this.cartService.countProducts();
    this.showAlert()
  }

  showAlert(){
    this.alert=true;
  }
  closeAlert(){
    this.alert=false
  }
}
