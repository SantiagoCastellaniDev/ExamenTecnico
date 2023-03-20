import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginUser } from '../models/login-user';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  ocultar: boolean = true;
  isLogged:boolean=false;
  loginUsuario: LoginUser={nombreUsuario:"",password:""};
  emailUsuario: string="";
  password: string="";
  usuarioHarcodeado={email:"usuario@email.com",password:"12E45678"};

  constructor(private formBuilder:FormBuilder, private router: Router,private authService:AuthService,private tokenService:TokenService) {
    this.loginForm = this.formBuilder.group(
      {
        nombreUsuario: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(25),Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])/)]]
      }
  )}

  ngOnInit(): void {}

  // OnLogin
  onLogin(event: any) {
    this.loginUsuario = this.loginForm.value;/*
    console.log(this.loginUsuario);
    if (this.loginUsuario.nombreUsuario=="usuario@email.com"&&this.loginUsuario.password=="12E45678"){
      this.isLogged = true;
      this.authService.isUserLogged();
      this.router.navigate(['/landing'])
    } else if (this.loginUsuario.nombreUsuario=="admin@email.com"&&this.loginUsuario.password=="12E45678"){
      this.isLogged = true;
      this.authService.isUserLogged();
      this.router.navigate(['/admin'])
    } else {
      this.usuarioIncorrecto()
    }*/    
    this.authService.login(this.loginUsuario).subscribe({
      next: (res:any) => {
        this.isLogged=true;       
        this.tokenService.setToken(res.token)
        this.tokenService.setUserName(res.nombreUsuario)
        this.tokenService.setAuthorities(res.authorities)
        if (res.authorities.length==2){
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/landing'])
        }  
      },
      error: (error:any) => {
        this.isLogged = false
        console.error(error)
        this.usuarioIncorrecto()
      },
      complete: () => {}
    })
  }

  // Properties Validators
  get Email() {
    return this.loginForm.get('email')
  }
  get Password() {
    return this.loginForm.get('password')
  }

  // ALERT: Incorrect User  
  usuarioIncorrecto() {
    Swal.fire({
      title: 'Usuario NO registrado',
      text: 'Datos incorrectos, o bien el usuario no está registrado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quiero registrarme'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/auth/register')
      }
    })
  }
}
