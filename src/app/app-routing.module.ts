import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './componentes/paginas/login/login.component';
import { RegistrareComponent } from './componentes/paginas/registrare/registrare.component';
import {HomeComponent} from './componentes/plantillas/home/home.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: LoginComponent,  pathMatch: 'full'},
  { path: 'registrar', component: RegistrareComponent,  pathMatch: 'full'},
  { path: 'inicio', component: HomeComponent,  pathMatch: 'full'}, 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
