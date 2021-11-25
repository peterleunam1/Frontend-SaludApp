import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-icon-cerrar',
  templateUrl: './menu-icon-cerrar.component.html',
  styleUrls: ['./menu-icon-cerrar.component.css']
})
export class MenuIconCerrarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.localStorage.clear();
    this.router.navigate(['/iniciar-sesion']);
  }

}
