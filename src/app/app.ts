import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { formatDate, NgClass } from '@angular/common';

// Interface used for each chat message.
interface ChatMessage {
  msg: string,
  timestamp: string,
  id: number
}
interface SettingsSection {
  isOpen: boolean
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /* @ViewChild("msgInput")
  msgInput!: ElementRef<HTMLTextAreaElement>; */
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

  generalSection: SettingsSection = {
    isOpen: false
  };

  msgControl = new FormControl("");

  submit(): void {
    this.pushMessageAndClear();
  }
  submitTextArea(e: Event): void {
    /* const _target = <HTMLTextAreaElement>e.target; */
    e.preventDefault();
    this.pushMessageAndClear();
  }
  pushMessageAndClear(): void {
    if (!this.msgControl.value) {
      return;
    }
    let _time: string = Date.now().toString()/* formatDate(Date.now(), "YYYY-MM-DD", "en-us") */;
    this.messageList.unshift({
      msg: this.msgControl.value as string,
      timestamp: _time,
      id: this.messageList.length + 1
    });
    this.msgControl.setValue("");
  }
  toggleSection(section: SettingsSection) {
    section.isOpen = !section.isOpen;
  }
}
