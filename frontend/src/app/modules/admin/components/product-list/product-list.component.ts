import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];
  producto:string="";
  editProductForm:FormGroup;
  editId:number=0;
  deleteId:number=0;
  trashProduct:string="";
  

  constructor(private productService:ProductsService, private router:Router, private formBuilder:FormBuilder) {
    
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
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAll().subscribe({
      next: (res) => {
        this.productList = res;
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{}
    })
  }

  navigateTo(event:Event,id:string,product:Product){
    event.preventDefault();
    event.stopPropagation();
    this.producto=JSON.stringify(product);    
    sessionStorage.setItem("productDetail",this.producto)
    this.router.navigateByUrl("admin/productdetail")
  }

  /*==================================================== */
  /*--------------Modales Metodos CRUD-------------------*/

  

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
    this.productService.updateProduct(editId,newProduct).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      },
      complete:()=>{
        this.getAllProducts();
        location.reload();
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
        this.getAllProducts();
        this.ngOnInit()
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
