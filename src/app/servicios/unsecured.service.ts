import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsecuredService {
  constructor() { }

  private _epsUrl = 'http://127.0.0.1:8000/api/v1/eps/';

  async getEps() {
    const response = await fetch(this._epsUrl);
    const data = await response.json();

    return data;
  }
}
