import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NewUser } from '../models/new-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  patient_view:boolean=true;
  listCodes:any;
  registerForm: FormGroup;
  ocultar: boolean = true;
  nuevoUsuario: NewUser|any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router:Router) {

    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(22),Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])/)]],        
      }
    )
  }

  ngOnInit(): void {
  }  

  // REGISTER
  onRegister() {
    this.nuevoUsuario = {
      nombre:this.registerForm.value.firstName,
      apellido:this.registerForm.value.apellido,
      nombreUsuario:this.registerForm.value.email,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }
    this.authService.register(this.nuevoUsuario).subscribe({
      next: (res:any) => {
        this.usuarioRegistrado()
      },
      error: (error:any) => {
        this.registroIncorrecto()
      },
      complete:()=>{}
    })
  }

  // ALERT: Usuario registrado 
  
  usuarioRegistrado() {    
    Swal.fire({
      title: 'Usuario Registrado',
      text: "Te has registrado satisfactoriamente en Tienda Virtual",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iniciar Sesión'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/auth/login')
      } else {
        this.router.navigateByUrl('/landing')
      }
    })
  }

  // ALERT: Registro Incorrecto
  
  registroIncorrecto() {
    Swal.fire({
      title: 'Error en el registro',
      text: "Por algún motivo relacionado con unos y ceros, no podemos registrarte",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Intentar nuevamente'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/auth/registro')
      } else {
        this.router.navigateByUrl('/landing')
      }
    })
  } 

  /*=================================================*/

  // VALIDATORS
  get Nombre() {
    return this.registerForm.get('firstName')
  }
  get Apellido() {
    return this.registerForm.get('lastName')
  }
  get Email() {
    return this.registerForm.get('email')
  }
  get Password() {
    return this.registerForm.get('password')
  }

  /*=================================================*/

}
