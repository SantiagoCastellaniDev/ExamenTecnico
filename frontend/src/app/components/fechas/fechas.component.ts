import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  generateFecha(){
    this.productService.generatedFecha();
    this.success();    
  }

  success(){
    Swal.fire({
      title: 'Felicidades',
      text: "Has decretado que hoy es un dia especial. En las compras de 10 o más productos, tendrás un descuento de $300.",
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
