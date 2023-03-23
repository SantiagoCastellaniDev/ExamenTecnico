import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCart } from 'src/app/enums/type-cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
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
  priceOffer:number=0;
  isOffer:boolean=false;
  typeCart:TypeCart=TypeCart.comun;
  today:string="";
  specialDay:string="2000-10-10";

  constructor(private productService:ProductsService,private cartService:CartService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getCart()
    this.getTotalPrice()      
    this.getFechaActual()
    this.getFechaEspecial()
    this.comparator()    
  }

  /*------------------DATA------------------------*/

  // Get ListCart (Lista de productos)
  getCart(){
    this.listCart = this.cartService.getListCart();
  }

  // Get Total Price (Precio Total)
  getTotalPrice(){
    this.totalPrice = this.cartService.totalPrice();
    this.getPriceOffer()
  }

  /*------------------FECHA ESPECIAL----------------*/

  // Get Date
  getFechaActual(){
    this.today = this.productService.getFechaActual();
  }
  
  // Get Fecha Especial
  getFechaEspecial(){
    this.specialDay=this.productService.fechaEspecial();
  }

  // Date Comparator
  comparator(){ 
    if (this.today===this.specialDay){
      this.typeCart=TypeCart.fecha;
      this.isOffer=true;
      this.getPriceOffer()      
    }
  }

  /*------------------OFERTAS------------------------*/

  // Get Total Price with Offer (Precio Total, dependiendo el tipo de oferta)
  getPriceOffer(){
    if (this.listCart.length==4){
      this.offer1()      
    } else if (this.listCart.length>9){
      this.isOffer=true;
      switch(this.typeCart) {
        case TypeCart.comun:
          this.offerComun();
          break;
        case TypeCart.vip:
          this.offerVip();
          break;
        case TypeCart.fecha:
          this.offerFecha();
          break;
        default:
      } 
    }    
  }

  // "Al comprar exactamente 4 PRODUCTOS se descuenta el 25%"
  offer1(){
    this.isOffer=true;
    this.priceOffer = this.totalPrice*0.75;
    return this.priceOffer
  }  

  // "Mas de 10 productos, y el carrito es COMUN"
  offerComun(){
    this.priceOffer = this.totalPrice - 100;
    return this.priceOffer
  }

  // "Mas de 10 productos, y el carrito es VIP"
  offerVip(){
    const productoMenorPrecio = this.listCart.reduce((a, b) => {
      if (b.price < a.price) {
        return b;
      } else {
        return a;
      }
    });
    this.priceOffer = this.totalPrice - productoMenorPrecio.price - 500;
    return this.priceOffer;
  }

  // "Mas de 10 productos, y hay descuento por FECHA ESPECIAL"
  offerFecha(){
    this.isOffer=true;
    this.priceOffer = this.totalPrice - 300;    
  }  

  /*--------------PRODUCTOS--------------------*/

  // Navigate To Products
  verProductos(){
    this.router.navigateByUrl("/products")
  }
  
  /*----------REMOVER PRODUCTO DE CARRITO-------------*/

  // Remove Product Of Cart
  removeProduct(i:number){    
    this.listCart.splice(i,1);
    this.getTotalPrice();
    const cant = this.listCart.length;
    if (cant!=4&&cant<10){
      this.isOffer=false
    } else if (cant===4){
      this.isOffer=true
    }
  }

  deleteCart(){
    this.listCart==[];
    location.reload()
  }

  /*--------------COMPRA--------------------*/

  // Modal Confirmar Compra
  buy(){
    if (this.isOffer){
      this.totalPrice = this.priceOffer
    } 
  }
  
  /*--------------CONFIRMAR COMPRA------------*/

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
