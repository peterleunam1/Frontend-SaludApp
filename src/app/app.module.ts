import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthService } from './servicios/auth.service';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/atomos/boton/boton.component';
import { BotonAlertaComponent } from './componentes/atomos/boton-alerta/boton-alerta.component';
import { InputsComponent } from './componentes/atomos/inputs/inputs.component';
import { RelojComponent } from './componentes/atomos/reloj/reloj.component';
import { TarjetaUnoComponent } from './componentes/atomos/tarjeta-uno/tarjeta-uno.component';
import { TarjetaIconComponent } from './componentes/atomos/tarjeta-icon/tarjeta-icon.component';
import { TarjetaIcon2Component } from './componentes/atomos/tarjeta-icon2/tarjeta-icon2.component';
import { TarjetaDosComponent } from './componentes/atomos/tarjeta-dos/tarjeta-dos.component';
import { InputIconComponent } from './componentes/moleculas/input-icon/input-icon.component';
import { MenuIconComponent } from './componentes/atomos/menu-icon/menu-icon.component';
import { MenuIconCerrarComponent } from './componentes/atomos/menu-icon-cerrar/menu-icon-cerrar.component';
import { InputsLoginComponent } from './componentes/organismos/inputs-login/inputs-login.component';
import { InputsRegistroComponent } from './componentes/organismos/inputs-registro/inputs-registro.component';
import { LogoFondoComponent } from './componentes/atomos/logo-fondo/logo-fondo.component';
import { MenuItemComponent } from './componentes/atomos/menu-item/menu-item.component';
import { MenuItemsCompletoComponent } from './componentes/moleculas/menu-items-completo/menu-items-completo.component';
import { LogoContenidoComponent } from './componentes/moleculas/logo-contenido/logo-contenido.component';
import { MenuComponent } from './componentes/organismos/menu/menu.component';
import { OSupLoginComponent } from './componentes/organismos/osup-login/osup-login.component';
import { CalendarioComponent } from './componentes/organismos/calendario/calendario.component';
import { OsupRegistroComponent } from './componentes/organismos/osup-registro/osup-registro.component';
import { RegistrareComponent } from './componentes/paginas/registrare/registrare.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { InicioComponent } from './componentes/plantillas/inicio/inicio.component';
import { IniciofComponent } from './componentes/paginas/iniciof/iniciof.component';
import { HomeComponent } from './componentes/plantillas/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    BotonAlertaComponent,
    InputsComponent,
    RelojComponent,
    TarjetaUnoComponent,
    TarjetaIconComponent,
    TarjetaIcon2Component,
    TarjetaDosComponent,
    InputIconComponent,
    MenuIconComponent,
    MenuIconCerrarComponent,
    InputsLoginComponent,
    InputsRegistroComponent,
    LogoFondoComponent,
    MenuItemComponent,
    MenuItemsCompletoComponent,
    LogoContenidoComponent,
    MenuComponent,
    OSupLoginComponent,
    CalendarioComponent,
    OsupRegistroComponent,
    RegistrareComponent,
    LoginComponent,
    InicioComponent,
    IniciofComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
