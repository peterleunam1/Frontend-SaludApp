import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() text: string="Default";
  @Input() action: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
