import { Injectable } from "@angular/core";
import { TODO } from "./todos";
import { uid } from "uid";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class TodosService {

    todosChanged = new Subject<Array<TODO>>();

    todos: Array<TODO> = [
        { 
          id: uid(),
          title: 'Comprar agua',
          done: false
        },
        {
          id: uid(),
          title: 'Ir al gym',
          done: true
        },
        {
          id: uid(),
          title: 'Mantenimiento coche',
          done: false
        },
        {
          id: uid(),
          title: 'Mantenimiento moto',
          done: false
        },
    ];


    addItem(item: TODO) {
        this.todos.push(item);
        this.todosChanged.next(this.todos)
    }

    incompletedItem(id: string) {
        this.todos = this.todos.map((item) => ({
          ...item,
          done: id === item.id ? false : item.done
        }))

        this.todosChanged.next(this.todos)
      }

      completedItem(id: string) {
        this.todos = this.todos.map((item) => ({
          ...item,
          done: id === item.id ? true : item.done
        }))

        this.todosChanged.next(this.todos)
      }

}