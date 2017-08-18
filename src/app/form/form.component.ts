import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() todoadded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  add(v){
    this.todoadded.emit(v.value);
    v.value = "";
    v.focus(true);
  }
}
