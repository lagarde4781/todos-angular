import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { TODO } from '../todos';
import { TodosService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html'
})
export class CompletedListComponent implements OnInit {
    completedList: Array<TODO> = [];
  // @Input() completedList: Array<TODO> = [];
  // @Output() itemIncompleted = new EventEmitter<string>();

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    // console.log(this.completedList)

    this.completedList = this.todosService.todos.filter((item) => item.done)


    this.todosService.todosChanged.pipe(
      tap((todos) => console.log('tap operator', todos)),
      map((todos) => todos.filter((item) => item.done)),
      tap((todos) => console.log('tap operator 2', todos)),
    ).subscribe((todos) => {
      this.completedList = todos
    })
  }

  markIncompleted(id: string) {
    // this.itemIncompleted.emit(id);
    this.todosService.incompletedItem(id)
  }

 
}
