import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  specialDay:string="2000-10-10";

  constructor(private http:HttpClient) { }

  URL = environment.baseUrl;  

  // getAll: OBTENER PRODUCTOS
  public getAll():Observable<any>{
    return this.http.get<any>(this.URL + "products")
  }

  // save: CREAR NUEVO PRODUCTO
  public saveProduct(product:any):Observable<any>{
    return this.http.post<any>(this.URL + "product/save",product)
  }

  // update: ACTUALIZAR PRODUCTO
  public updateProduct(id:number,product:any):Observable<any>{    
  return this.http.put<any>(this.URL + `product/update/${id}`,product)
  }

  // delete: ELIMINAR PRODUCTO
  public deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `product/delete/${id}`)
  }



  // getFecha: OBTENER FECHA ACTUAL 
  public getFechaActual(){
    const today = new Date();
    const fechaIso = today.toISOString();
    const fechaFormateada = fechaIso.substring(0, 10);
    return fechaFormateada
  }

  public generatedFecha(){    
    const today = new Date();
    const fechaIso = today.toISOString();
    const fechaFormateada = fechaIso.substring(0, 10);
    this.specialDay =fechaFormateada;
    console.log(this.specialDay)
  }

  public fechaEspecial(){
    return this.specialDay
  }

  // getLastPurchase. OBTENER ULTIMA COMPRA
  public getLastPurchase(){
    console.log("Ultima compra")
  }

}
