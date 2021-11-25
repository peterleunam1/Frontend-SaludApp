import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iniciof',
  templateUrl: './iniciof.component.html',
  styleUrls: ['./iniciof.component.css']
})
export class IniciofComponent implements OnInit {
  @Input() nombre: string="";
  @Input() text: string="";
  constructor() { }

  ngOnInit(): void {
    
  }

}
