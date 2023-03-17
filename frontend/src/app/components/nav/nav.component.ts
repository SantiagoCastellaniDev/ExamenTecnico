import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged:boolean=false;
  cantProducts:number=0;

  constructor(private router:Router,private authService:AuthService,private cartService:CartService) {    
    
   }

  ngOnInit(): void {
    const status = sessionStorage.getItem("isLogged?");
    if (status=="UserIsLogged"){
      this.isLogged=true;
    } else {
      this.isLogged=false
    }
  }
  
  actionUser(){
    if (this.isLogged){
      this.logout()
    } else {
      this.logIn()
    }

  }

  logIn(){
    this.router.navigateByUrl("/auth/login")
  }

  logout(){
    Swal.fire({
      title: '¿Quieres cerrar sesión?',
      text: "Seras redirigido a la página de inicio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result:any) => {
      if (result.isConfirmed) {        
        this.cartService.resetCart();
        this.isLogged=false;
        this.authService.logOut();    
        this.router.navigateByUrl('/landing')
      }
    })
  }

  openCart(){
    if(this.isLogged){
      this.router.navigateByUrl('/cart')
    } else {
      this.info()
    }
    
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
        this.router.navigateByUrl('/landing')
      }
    })
  }
/*
  actualiceCount(){
    this.cartService.getCount().subscribe({
      next: (res) => {
        this.cantProducts=res;
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {}
    })
  }*/
  

  


}


