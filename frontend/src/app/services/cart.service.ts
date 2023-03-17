import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  listCart:Product[]=[];
  priceTotal:number=0;
  cantProduct:number=0;

  constructor() { }

  public getListCart(){
    return this.listCart
  }

  public addProductToCart(product:Product):void{    
    this.listCart.push(product);
    this.cantProduct = this.listCart.length;
  }

  public deleteProductOfCart(id:string):void{    
  }

  public resetCart():void{
    this.listCart=[]
  }

  public countProducts():number{
    this.cantProduct = this.listCart.length;
    return this.cantProduct
  }
  public getCount():Observable<any>{
    return of(this.cantProduct)
  }

  public totalPrice(){
    this.priceTotal = this.listCart.reduce((totalPrice, product) => totalPrice + product.price, 0);
    return this.priceTotal;  
  }

  

 
}
