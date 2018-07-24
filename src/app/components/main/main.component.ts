import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

class ErrorMessage {
  message: string;
  timeout: number = 2000;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  TodoForm: FormGroup;
  error: ErrorMessage = new ErrorMessage;

  constructor(public todo: TodoService, public fb: FormBuilder) {
    this.TodoForm = this.fb.group({
      title: [null, Validators.required],
      description: [null],
      dueData: [null, Validators.required]
    });
  }

  AddTodo(formData: FormGroup) {
    if (formData.valid) {
      this.todo.AddTodo(formData.value);
      this.TodoForm.reset();
    } else {
      this.error.message = "Please enter a valid todo title, and a due date.";
      setTimeout(() => {
        this.error.message = null;
      }, this.error.timeout);
    }
  }

  ngOnInit() {
  }

}
