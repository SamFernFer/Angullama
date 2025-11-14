import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageList: string[] = [];
  protected readonly title = signal('Angullama');

  submit(event: Event): void {
    const _target = <HTMLTextAreaElement>event.target;
    this.messageList.push(_target.value);
    _target.value = '';
  }
}
