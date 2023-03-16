import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  actionUser(){
    if (this.isLogged){
      this.logout()
    } else {
      this.logIn()
    }

  }

  logIn(){
    console.log("Hola");
    this.router.navigateByUrl("/auth/login")
  }

  logout(){
    console.log("chau");
    this.isLogged=false
  }

}
