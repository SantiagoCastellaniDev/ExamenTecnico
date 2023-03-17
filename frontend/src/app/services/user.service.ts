import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL=environment.baseUrl;

  constructor(private http:HttpClient) { }

  // savePurchase
  public savePurchase(listPurchase:any,totalPrice:number)/*:Observable<any>*/{
    //return this.http.post<any>(this.URL + "save",listPurchase)
    console.log(listPurchase,totalPrice)
  }
}
