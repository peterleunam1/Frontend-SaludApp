import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.css']
})
export class InputIconComponent implements OnInit {

  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() tipo: string = '';
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
  }

}
