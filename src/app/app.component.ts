import { Component } from '@angular/core';
import { TodoComponent } from "./todo/todo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  newTask: string = '';
  newTaskDate: string = '';
  tasks: { text: string; date: string; completed: boolean }[] = [];

  constructor() {
  }

  addTask() {
    if (this.newTask.trim() === '' || this.newTaskDate === '') return;

    this.tasks.push({ text: this.newTask, date: this.newTaskDate, completed: false });
    this.newTask = '';
    this.newTaskDate = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    let updatedText = prompt("Edit your task:", this.tasks[index].text);
    if (updatedText !== null) {
      this.tasks[index].text = updatedText;
    }
  }

}