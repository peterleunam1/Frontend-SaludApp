import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs-login',
  templateUrl: './inputs-login.component.html',
  styleUrls: ['./inputs-login.component.css']
})
export class InputsLoginComponent implements OnInit {

  constructor(private router: Router) { }
  sendToRegister(){
    this.router.navigate(['/registrar']);
  }
  ngOnInit(): void {
  }

}
