import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  isUnchanged = true;

  onCancel(event?: MouseEvent): void {
    const msg = event
      ? 'Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('cancelled' + msg);
  }

  constructor() {}

  ngOnInit(): void {}
}
