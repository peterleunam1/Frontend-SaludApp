import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputIconComponent implements OnInit {

  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() tipo: string = '';
  @Input() id = '';

  @Output() sendValue = new EventEmitter<string>();

  message: string = "";

  updateMessage(e: Event){
    this.message = (e.target as HTMLInputElement).value;
    this.onSendValue();
  }

  onSendValue(){
    this.sendValue.emit(this.message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}