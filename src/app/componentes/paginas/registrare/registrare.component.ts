import { Component, OnInit } from '@angular/core';
import { saveName } from 'src/app/helpers/parseName';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registrare',
  templateUrl: './registrare.component.html',
  styleUrls: ['./registrare.component.css']
})
export class RegistrareComponent implements OnInit {

  constructor(private auth: AuthService) { }

  // registerMethod = this.auth.registerUser;
  
  ngOnInit(): void {
  }
}
