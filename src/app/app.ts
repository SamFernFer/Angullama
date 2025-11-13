import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageList: string[] = [];
  protected readonly title = signal('Angullama');

  submit(_msg: string): void {
    this.messageList.push(_msg);
  }
  getHistory() {
    return history;
  }
}
