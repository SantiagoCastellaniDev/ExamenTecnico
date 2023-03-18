import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  generateFecha(){
    this.productService.generatedFecha();    
  }

}
