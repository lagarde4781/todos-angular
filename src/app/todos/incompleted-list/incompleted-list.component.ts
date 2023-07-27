import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO } from '../todos';
import { TodosService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-incompleted-list',
  templateUrl: './incompleted-list.component.html'
})
export class IncompletedListComponent implements OnInit {
  incompletedList: Array<TODO> = [];
  // @Input() incompletedList: Array<TODO> = [];
  // @Output() itemCompleted = new EventEmitter<string>();

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.incompletedList = this.todosService.todos.filter((item) => !item.done)

    console.log( this.incompletedList)

    this.todosService.todosChanged.pipe(
      tap((todos) => console.log('tap operator', todos)),
      map((todos) => todos.filter((item) => !item.done)),
      tap((todos) => console.log('tap operator 2', todos)),
    ).subscribe((todos) => {
      this.incompletedList = todos
    })
  }

  markCompleted(id: string) {
    // this.itemCompleted.emit(id);
    this.todosService.completedItem(id)

    console.log( this.incompletedList)
    
  }

}
