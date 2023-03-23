import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:Product;
  id:number=0;
  editProductForm:FormGroup;
  editId:number=0;
  deleteId:number=0;
  trashProduct:number=0;
  ok:boolean=false;

  constructor(private router:Router, private productService:ProductsService, private formBuilder:FormBuilder) {

    // Formulario Editar Gasto
    this.editProductForm = this.formBuilder.group(
      {      
        name: ['', [Validators.required]],
        description: ['',[Validators.required]],
        price:[0,[Validators.required,Validators.min(0)]],
        category:['',[Validators.required,Validators.maxLength(14)]],
        img_Product:['',[Validators.required]]
      }
    )
   }

  ngOnInit(): void {
    this.getProduct()   
  }

  getProduct(){
    this.getIdOfSession();
    this.getById()
  }
  
  getIdOfSession(){
    const id = sessionStorage.getItem("idProduct");
    if (id!=null){
      this.id=parseInt(id)
    }
  }

  getById(){
    if(this.id!=0){
      this.productService.getById(this.id).subscribe({
        next: (res) => {
          this.product=res;
        },
        error: (error) => {
          console.log(error)
        },
        complete:()=>{
        }  
      })
    }    
  }

  /*--------EDITAR PRODUCTO------------*/

  //Boton abrir modal: Capturar Id y producto
  editableId(id:any,product: any){
    const editableProduct = product;
    this.editId = id;
    /* Mostrar datos en el modal */    
    this.editProductForm.controls['name'].setValue(editableProduct.name);
    this.editProductForm.controls['description'].setValue(editableProduct.description);
    this.editProductForm.controls['price'].setValue(editableProduct.price);
    this.editProductForm.controls['category'].setValue(editableProduct.category);
    this.editProductForm.controls['img_Product'].setValue(editableProduct.img_Product);    
  }

  // Actualizar PRODUCTO
  updateProduct(): void{
    const newProduct = this.editProductForm.value;
    this.editProductForm.reset();
    const editId = this.editId;
    console.log(editId);
    console.log(newProduct)
    this.productService.updateProduct(editId,newProduct).subscribe({
      next: (res) => {
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{
        this.getProduct();
        //location.reload();
      }
    })
  }

  /*------BORRAR GASTO-------------------*/

  //BOTON abrir modal: Capturar Id y GASTO
  trashId(id:any,product:any): void{
    this.deleteId = id;
    this.trashProduct = product.name; 
  }
  
  // deleteProduct:  ELIMINAR PRODUCTO
  deleteProduct(): void{
    this.productService.deleteProduct(this.deleteId).subscribe({
      next: (res) => {
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{
        this.router.navigateByUrl("/admin")
      }
    })
  }

  // VALIDATORS
  
  

  // Propiedades Editar Ingreso
  get NameEdit() { 
    return this.editProductForm.get('name'); 
  }
  get DescriptionEdit() {
    return this.editProductForm.get('description')
  }
  get PriceEdit() { 
    return this.editProductForm.get('price'); 
  }
  get CategoryEdit() {
    return this.editProductForm.get('category')
  }
  get Img_ProductEdit() {
    return this.editProductForm.get('category')
  }  
  clearValidatorsEdit() {
    this.editProductForm.reset(this.editProductForm.value);
  }

}
