import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getStatusLogin()
  }

  getStatusLogin(){
    const status = sessionStorage.getItem("isLogged?");
    if (status=="UserIsLogged"){
      this.isLogged=true;
    } else {
      this.isLogged=false
    }
  }

  actionUser(){
    this.logout()    
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
        this.isLogged=false;
        sessionStorage.clear()
        this.router.navigateByUrl('/landing')
      }
    })
  }

}
