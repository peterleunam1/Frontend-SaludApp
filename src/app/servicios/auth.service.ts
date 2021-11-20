import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8000/api/v1/usuarios/";
  private _loginUrl = "http://localhost:8000/api/v1/usuariosauth/";

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
