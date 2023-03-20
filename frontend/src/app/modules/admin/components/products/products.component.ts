import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  addProductForm:FormGroup;

  constructor(private productService:ProductsService, private formBuilder:FormBuilder) { 
    // Formulario Nuevo Producto            
    this.addProductForm = this.formBuilder.group(
      {      
        name: ['', [Validators.required]],
        description: ['',[Validators.required,Validators.maxLength(50)]],
        price:['',[Validators.required,Validators.min(0)]],
        category:['',[Validators.required]],
        img_Product:['',[Validators.required,,Validators.maxLength(300)]]
      }
    )
  }

  ngOnInit(): void {    
  }


  /*------------NUEVO PRODUCTO---------------*/  
  saveProduct(){
    // Almacenando el Formulario
    const newProduct = this.addProductForm.value;

    // Servicio Save Product  
    this.productService.saveProduct(newProduct).subscribe({
      next: (res) => {
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{
        location.reload();
      }
      }
    )
  }

  // Propiedades para los validadores
  // Propiedades Guardar PRODUCTO
  get NameAdd() { 
    return this.addProductForm.get('name'); 
  }
  get DescriptionAdd() {
    return this.addProductForm.get('description')
  }
  get PriceAdd() { 
    return this.addProductForm.get('price'); 
  }
  get CategoryAdd() {
    return this.addProductForm.get('category')
  }
  get Img_ProductAdd() {
    return this.addProductForm.get('img_Product')
  }
  clearValidatorsAdd() {
  }



}
