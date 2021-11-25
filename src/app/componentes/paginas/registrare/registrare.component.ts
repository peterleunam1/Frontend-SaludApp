import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { InputsRegistroComponent } from '../../organismos/inputs-registro/inputs-registro.component';

@Component({
  selector: 'app-registrare',
  templateUrl: './registrare.component.html',
  styleUrls: ['./registrare.component.css']
})
export class RegistrareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const userInfo: any = JSON.parse(localStorage.getItem('userInfo') || '{"error": "User info not found"}');
    if(!userInfo.error){
      window.location.href = '/inicio';
    }
  }
}
