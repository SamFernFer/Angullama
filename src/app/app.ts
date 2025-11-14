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
    this.pushMessageAndClear(_target);
  }
  pushMessageAndClear(area: HTMLTextAreaElement): void {
    this.messageList.push(area.value);
    area.value = '';
  }
  getMsgInput(): HTMLTextAreaElement {
    return <HTMLTextAreaElement>document.getElementById("msg-input");
  }
}
