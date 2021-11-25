import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { IUserInfo } from 'src/app/Interfaces/userInfo';
import { saveName } from 'src/app/helpers/parseName';
import { UnsecuredService } from '../../../servicios/unsecured.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inputs-registro',
  templateUrl: './inputs-registro.component.html',
  styleUrls: ['./inputs-registro.component.css']
})
export class InputsRegistroComponent implements OnInit {
  
  userInfo: IUserInfo = {
    nombreCompleto: '',
    numeroDocumento: '',
    contrasenia: '',
    eps: '',
    email: ''
  };

  eps = [];

  infoMessage: string = '';
  colorInfo: string = '';

  constructor(private auth: AuthService, private unsecured: UnsecuredService, private router: Router) { }

  public getNombreCompleto(nombre: string){
    this.userInfo.nombreCompleto = nombre;
  }

  public getNumeroDocumento(numeroDoc: string){
    this.userInfo.numeroDocumento = numeroDoc;
  }

  public getEps(e: Event){
    this.userInfo.eps = (e.target as HTMLInputElement).value;
  }

  public getCorreo(correo: string){
    this.userInfo.email = correo;
  }

  public getContrasenia(contrasenia: string){
    this.userInfo.contrasenia = contrasenia;
    console.log(this.userInfo);
  }

  async registrarUsuario(){
    const { nombres, apellido1, apellido2 } = saveName(this.userInfo.nombreCompleto);
    const result = await this.auth.registerUser({
      identificacion: this.userInfo.numeroDocumento,
      nombres,
      apellidoPaterno: apellido1,
      apellidoMaterno: apellido2,
      eps: this.userInfo.eps,
      email: this.userInfo.email,
      contrasenia: this.userInfo.contrasenia
    });

    if(result.response.status !== 201){
      this.infoMessage = "Ocurrió un error, verifique los datos y que el usuario no esté registrado!";
      this.colorInfo = 'red';
    }else{
      this.infoMessage = "Usuario registrado con éxito!";
      this.colorInfo = 'green';
      window.localStorage.setItem('userInfo', JSON.stringify(result.data));
      setTimeout(() => {
        window.location.href = '/inicio';
      }, 2000);
    }
  }

  async fetchEps(){
    const result = await this.unsecured.getEps();
    this.eps = result;
  }

  goToLogin(){
    this.router.navigate(['/iniciar-sesion']);
  }

  ngOnInit(): void {
    this.fetchEps();
  }

}
