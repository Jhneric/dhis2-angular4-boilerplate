import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list = [];
  constructor() { }
  ngOnInit() {
  }

}
