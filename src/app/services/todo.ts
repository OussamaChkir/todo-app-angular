import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Todo as todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class Todo {

  private todosSubject = new BehaviorSubject<todo[]>([]);
  todos$ = this.todosSubject.asObservable();
  private idCounter = 1;
  private filterSubject = new BehaviorSubject<'all'|'completed'|'active'>('all');
  filter$ = this.filterSubject.asObservable();

  filteredTodos$=combineLatest([this.todos$,this.filter$]).pipe(
    map(([todos, filter]) => {
      switch (filter) {
        case 'completed':
          return todos.filter(t => t.completed);
        case 'active':
          return todos.filter(t => !t.completed);
        default:
          return todos;
      }
    })
  );

  completedPercentage$ = this.todos$.pipe(
    map(todos => {
      if (todos.length === 0) {
        return 0;
      }
      const completedTodos = todos.filter(todo => todo.completed).length;
      return (completedTodos / todos.length) * 100;
    })
  );

  addTodo(title: string) {
    const newTodo: todo = { id: this.idCounter++, title, completed: false };
    const updated = [...this.todosSubject.value, newTodo];
    this.todosSubject.next(updated);
  }

  toggleTodo(id: number) {
    const updated = this.todosSubject.value.map(
      todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(updated);
  }

  deleteTodo(id: number) {
    const updated = this.todosSubject.value.filter(todo => todo.id != id);
    this.todosSubject.next(updated);
  }

  setFilter(filter: 'all' | 'completed' | 'active') {
    this.filterSubject.next(filter);
  }

}
