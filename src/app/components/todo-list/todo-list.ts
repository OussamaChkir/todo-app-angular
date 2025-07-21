import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { Todo as todoService } from '../../services/todo';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todos$: Observable<Todo[]>;
  filter$: Observable<'all' | 'completed' | 'active'>;
  completedPercentage$: Observable<number>;

  constructor(private todoService: todoService) {
    this.todos$ = todoService.filteredTodos$;
    this.filter$ = todoService.filter$;
    this.completedPercentage$ = todoService.completedPercentage$;
  }

  toggle(id: number) {
    this.todoService.toggleTodo(id);
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
  
  setFilter(filter: 'all' | 'completed' | 'active') {
    this.todoService.setFilter(filter);
  }
  
}
