import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { TokenService } from 'src/app/modules/auth/services/token.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

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
  isLogged:boolean=false;
  
  alert:boolean=false;

  constructor(private productsService:ProductsService, private tokenService:TokenService, private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getStatusLogin()
    
  }

  getAllProducts() {
    this.productsService.getAll().subscribe({
      next: (res) => {
        this.productList = res;
      },
      error: (error) => {
        console.error(error)
      },
      complete:()=>{}
    })
  }

  getStatusLogin(){
      const status = this.tokenService.getToken();
      if (status!=null){
        this.isLogged=true
      } else {
        this.isLogged=false
      }
  }  

  navigateTo(event:Event,id:string,product:Product){
    event.preventDefault();
    event.stopPropagation();
    this.producto=JSON.stringify(product);    
    sessionStorage.setItem("idProduct",id);
    sessionStorage.setItem("productDetail",this.producto);
    this.router.navigateByUrl(`product/detail/${id}`)
  }

  addToCart(product:Product){
    if (this.isLogged){
      this.cartService.addProductToCart(product);
      this.cantProducts = this.cartService.countProducts();
      this.showAlert()
    } else {
      this.info()
    }
    
  }

  showAlert(){
    this.alert=true;
  }
  closeAlert(){
    this.alert=false
  }

  info(){
    Swal.fire({
      title: 'Inicia sesión',
      text: "Para poder comprar o visualizar tu carrito, debes iniciar sesión",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Inicia sesión'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/auth/login')
      }
      else {
        this.router.navigateByUrl('/products')
      }
    })
  }
}
