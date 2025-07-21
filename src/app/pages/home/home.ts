import { Component } from '@angular/core';
import { TodoForm } from '../../components/todo-form/todo-form';
import { TodoList } from '../../components/todo-list/todo-list';

@Component({
  selector: 'app-home',
  imports: [TodoForm, TodoList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
