import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    @Input() text: string="";
    @Input() ruta: string="";
  constructor() { }

  ngOnInit(): void {
    const userInfo: any = JSON.parse(localStorage.getItem('userInfo') || '{}') || null;
    console.log(userInfo);
  }

}
