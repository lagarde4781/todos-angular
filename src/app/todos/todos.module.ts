import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';
import { NewItemComponent } from './new-item/new-item.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { IncompletedListComponent } from './incompleted-list/incompleted-list.component';



@NgModule({
  declarations: [TodosComponent, NewItemComponent, CompletedListComponent, IncompletedListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
