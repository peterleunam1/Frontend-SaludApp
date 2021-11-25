import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8000/api/v1/usuarios/";
  private _loginUrl = "http://localhost:8000/api/v1/usuariosauth/";

  constructor() { }

  async registerUser(user: any) {

    let formBody: Array<any> | string = []; 
    for (var property in user) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(user[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&"); 

    const response = await fetch(this._registerUrl, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const data = await response.json();
    return {response, data};
  }

  async loginUser() {
 
  }
  
}
