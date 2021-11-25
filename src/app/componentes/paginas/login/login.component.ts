import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const userInfo: any = JSON.parse(localStorage.getItem('userInfo') || '{"error": "User info not found"}');
    if(!userInfo.error){
      window.location.href = '/inicio';
    }
  }

}
