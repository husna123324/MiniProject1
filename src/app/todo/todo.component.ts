import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone : true,
  imports:[CommonModule, FormsModule],
  
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';  // Model for the new task input
  tasks: Array<{ task: string, completed: boolean }> = [];  // List of tasks

  // Add a new task
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ task: this.newTask, completed: false });
      this.newTask = '';  // Reset the input field
    }
  }

  // Mark task as completed
  toggleCompletion(task: any) {
    task.completed = !task.completed;
  }

  // Remove task
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}