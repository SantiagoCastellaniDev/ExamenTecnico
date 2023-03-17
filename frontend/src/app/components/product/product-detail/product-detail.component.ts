import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product|any;
  alert:boolean=false;
  cantProducts:number=0;

  constructor(private productService:ProductsService, private router:Router, private userService:UserService, private cartService:CartService) { }

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

  confirmPurchaseProduct(){
    this.userService.savePurchase(this.product,this.product.price);
    this.success();
  }

  // Compra Confirmada
  success(){
    Swal.fire({
      title: 'Felicidades',
      text: "La compra fue realizada con éxito",
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/landing')
      }
    })
  }



}
