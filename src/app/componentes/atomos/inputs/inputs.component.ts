import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Input() tipo: string="text";
  @Input() placeholder: string = "";
  @Input() id: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
