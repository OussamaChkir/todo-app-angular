import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo as TodoService } from '../../services/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss'
})
export class TodoForm {
  todoForm : FormGroup;

  constructor(private fb:FormBuilder,private todoService:TodoService){
    this.todoForm = this.fb.group({
      title: ['',Validators.required]
    });
  }

  onSubmit(){
    if(this.todoForm.valid){
      this.todoService.addTodo(this.todoForm.value.title);
      this.todoForm.reset();
    }
  }

}
