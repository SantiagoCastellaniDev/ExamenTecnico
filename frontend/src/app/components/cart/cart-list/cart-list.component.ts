import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  listCart:Product[]=[];
  totalPrice:number=0;

  constructor(private cartService:CartService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getCart()
    this.getTotalPrice()
    console.log(this.listCart)
  }

  // Get ListCart
  getCart(){
    this.listCart = this.cartService.getListCart();
  }

  // Get Total Price
  getTotalPrice(){
    this.totalPrice = this.cartService.totalPrice()
  }

  /*--------------CONFIRMAR COMPRA--------------------*/

  // Navigate To Products
  verProductos(){
    this.router.navigateByUrl("/products")
  }
  
  /*----------REMOBER PRODUCTO DE CARRITO-------------*/

  // Remove Product Of Cart
  removeProduct(i:number){    
    this.listCart.splice(i,1);
    this.getTotalPrice()
    

  }

  /*--------------CONFIRMAR COMPRA--------------------*/

  // Modal Confirmar Compra
  buy(){
    console.log("Hola") 
  }

  // Confirmar Compra
  confirmPurchase(){
    const totalPrice = this.totalPrice;
    const listPurchase = this.listCart;
    this.userService.savePurchase(listPurchase,totalPrice);
    this.cartService.resetCart();
    this.success()
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
