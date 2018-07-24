import { Injectable } from '@angular/core';

class TodoItem {
  title: string;
  description: string;
  dueData: Date;
  isVIP?: boolean;
  dateAdded?: Date;
  isCompleted?: boolean;
  dateCompleted?: Date;

  constructor({title, description, dueData}) {
    this.title = title;
    this.description = description;
    this.dueData = dueData;
    this.isVIP = false;
    this.dateAdded = new Date();
    this.isCompleted = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  public TodoList: TodoItem[] = [];

  public AddTodo(todo: TodoItem): void {
    this.TodoList.push(new TodoItem(todo));
  }

  public RemoveTodo(index: number): void {
    this.TodoList.splice(index, 1);
  }

  public EditTodoTitle(index: number, title: string): void {
    this.TodoList[index].title = title;
  }

  public CompleteTodo(index: number): void {
    this.TodoList[index] = {
      ...this.TodoList[index],
      isCompleted: true,
      dateCompleted: new Date()
    };
  }

  public VIPTodoItem(index: number): void {
    this.TodoList[index].isVIP = !this.TodoList[index].isVIP;
  }

  public GetTodaysTodos(): TodoItem[] {
    let TodaysDate = new Date()
    return this.TodoList.map(todo => {
      if (todo.dueData.setHours(0, 0, 0, 0,) === TodaysDate.setHours(0, 0, 0, 0))
        return todo;
    });
  }

  public GetVIPTodos(): TodoItem[] {
    return this.TodoList.filter(todo => todo.isVIP)
  }
}