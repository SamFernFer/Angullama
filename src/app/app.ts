import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';

interface ChatMessage {
  msg: string,
  timestamp: string,
  id: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild("msgInput")
  msgInput!: ElementRef<HTMLTextAreaElement>;
  timestamp: string = "ERROR";
  messageList: ChatMessage[] = [];
  protected readonly title = signal('Angullama');

  submit(event: Event): void {
    const _target = <HTMLTextAreaElement>event.target;
    this.pushMessageAndClear();
  }
  pushMessageAndClear(): void {
    const _area = this.msgInput.nativeElement;
    let _time: string = Date.now().toString()/* formatDate(Date.now(), "YYYY-MM-DD", "en-us") */;
    this.messageList.unshift({
      msg: _area.value,
      timestamp: _time,
      id: this.messageList.length
    });
    _area.value = '';
  }
  /* getMsgInput(): HTMLTextAreaElement {
    return <HTMLTextAreaElement>document.getElementById("msg-input");
  } */
}
