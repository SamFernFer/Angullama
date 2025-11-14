import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  timestamp: string = "ERROR";
  messageList: string[] = [];
  protected readonly title = signal('Angullama');

  submit(event: Event): void {
    const _target = <HTMLTextAreaElement>event.target;
    this.pushMessageAndClear(_target);
  }
  pushMessageAndClear(area: HTMLTextAreaElement): void {
    this.timestamp = Date.now().toString()/* formatDate(Date.now(), "YYYY-MM-DD", "en-us") */;
    this.messageList.unshift(area.value);
    area.value = '';
  }
  getMsgInput(): HTMLTextAreaElement {
    return <HTMLTextAreaElement>document.getElementById("msg-input");
  }
}
