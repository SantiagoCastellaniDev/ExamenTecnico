import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  URL = environment.baseUrl
/*
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }*/

  // REGISTRARSE
  public register(nuevoUsuario: NewUser): Observable<any> {
    return this.http.post<any>(this.URL + '/auth/register', nuevoUsuario)
  }

  // LOGIN
  public login(loginUser: LoginUser): Observable<any> {
    return this.http.post<any>(
      this.URL + '/auth/login',loginUser,/*this.httpOptions.headers*/
    )
  }

  // LOGOUT
  public logOut(): void{
    window.sessionStorage.clear();
  }
}
