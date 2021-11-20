import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-alerta',
  templateUrl: './boton-alerta.component.html',
  styleUrls: ['./boton-alerta.component.css']
})
export class BotonAlertaComponent implements OnInit {

  @Input() text: string="Default";

  constructor() { }

  ngOnInit(): void {
  }

}
