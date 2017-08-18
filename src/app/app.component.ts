import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  list = [
    {
      id:1,
      name:"Todo 1",
      completed:true
    },
    {
      id:2,
      name:"Todo 2",
      completed:false
    },
    {
      id:3,
      name:"Todo 3",
      completed:true
    }
  ]
  addTodo(v){
    this.list.push({
      id:this.list.length + 1,
      name:v,
      completed:false
    });
  }
}
