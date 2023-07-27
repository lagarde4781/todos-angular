import { Component, EventEmitter, Output } from '@angular/core';
import { TODO } from '../todos';
import { uid } from 'uid';
import { TodosService } from '../todo.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html'
})
export class NewItemComponent {

  // @Output() newItem = new EventEmitter<TODO>()
  constructor(private todosService: TodosService) {}
  
  titleItem: string = ''

  addItem() {
    if(this.titleItem.trim().length > 0) {
      const item: TODO = {
        id: uid(),
        title: this.titleItem,
        done: false
      }
      // this.newItem.emit(item);

      this.todosService.addItem(item)
    }
  }
}
