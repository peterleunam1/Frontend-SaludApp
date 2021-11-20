import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-icon2',
  templateUrl: './tarjeta-icon2.component.html',
  styleUrls: ['./tarjeta-icon2.component.css']
})
export class TarjetaIcon2Component implements OnInit {
  @Input() ruta: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
