import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginUsuario: LoginUser={email:"",password:""};
  emailUsuario: string="";
  password: string="";

  constructor(private formBuilder:FormBuilder, private router: Router,private authService:AuthService,private tokenService:TokenService) {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(25),Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])/)]]
      }
  )}

  ngOnInit(): void {}

  // OnLogin
  onLogin(event: any) {
    this.loginUsuario = this.loginForm.value;
    this.authService.login(this.loginUsuario).subscribe({
      next: (res:any) => {
        this.isLogged = true
        /*this.tokenService.setToken(res.data.token)
        this.tokenService.setUserId(res.data.user.id)
        this.tokenService.setUserName(res.data.user.firstName)
        this.tokenService.setLastName(res.data.user.lastName)
        this.tokenService.setDni(res.data.user.dni)
        this.tokenService.setPhone(res.data.user.phone)
        this.tokenService.setEmail(res.data.user.email)
        this.tokenService.setRole(res.data.user.role)*/
        const rol = res.data.user.role
        if (rol == 'patient') {
          this.router.navigateByUrl('/user/dashboard/inicio')
        } else if (rol=="doctor") {
          this.router.navigate(['/doctor/dashboard'])
        } else if (rol=="admin"){
          this.router.navigate(['/admin/dashboard'])
        } /*else {
          this.usuarioIncorrecto();
        }*/;
      },
      error: (error:any) => {
        this.isLogged = false
        console.error(error)/*
        this.usuarioIncorrecto()*/
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
  /*
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
        this.router.navigateByUrl('/auth/registro')
      }
    })
  }*/

}
