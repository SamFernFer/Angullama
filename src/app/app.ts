import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';

// Interface used for each chat message.
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
  messageList: ChatMessage[] = [
    {
      msg: "text",
      timestamp: "2025-11-17T13:45",
      id: 3
    },
    {
      msg: "First line\nSecond line\nThird line",
      timestamp: "2025-11-17T13:45",
      id: 2
    },
    {
      msg: "",
      timestamp: "2025-11-17T13:45",
      id: 1
    }
  ];
  protected readonly title = signal('Angullama');

  submit(): void {
    // Not using the event object anymore.
    /* const _target = <HTMLTextAreaElement>event.target; */
    this.pushMessageAndClear();
  }
  pushMessageAndClear(): void {
    const _area = this.msgInput.nativeElement;
    let _time: string = Date.now().toString()/* formatDate(Date.now(), "YYYY-MM-DD", "en-us") */;
    this.messageList.unshift({
      msg: _area.value,
      timestamp: _time,
      id: this.messageList.length + 1
    });
    _area.value = '';
  }
  /* getMsgInput(): HTMLTextAreaElement {
    return <HTMLTextAreaElement>document.getElementById("msg-input");
  } */
}
