import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() nombre: string="";
  constructor() { }

  ngOnInit(): void {
    const userInfo: any = JSON.parse(localStorage.getItem('userInfo') || '{"error": "User info not found"}');
    if(userInfo.error){
      window.location.href = '/iniciar-sesion';
    }
  }
}
