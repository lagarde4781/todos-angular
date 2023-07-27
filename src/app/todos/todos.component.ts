import { Component, OnInit } from '@angular/core';
import { TODO } from './todos';
import { uid } from 'uid';
import { TodosService } from './todo.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  
  todos: Array<TODO> = []
  

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.todos


    this.todosService.todosChanged.pipe(
      tap((todos) => console.log(tap))
    ).subscribe((todos) => this.todos = todos)
  }

  completedList() {
    return this.todos.filter((item) => item.done)
  }

  incompletedList() {
    return this.todos.filter((item) => !item.done)
  }

  // incompletedItem(id: string) {
  //   this.todos = this.todos.map((item) => ({
  //     ...item,
  //     done: id === item.id ? false : item.done
  //   }))
  // }

  // completedItem(id: string) {
  //   this.todos = this.todos.map((item) => ({
  //     ...item,
  //     done: id === item.id ? true : item.done
  //   }))
  // }
}
