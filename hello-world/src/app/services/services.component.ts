import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HighlightDirective, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  bankingServices: any[] = [
    {
      type: 'Issue business loans',
      years: 2,
    },
    {
      type: 'Provide periodic reports and analysis',
      years: 7,
    },
    {
      type: 'Open new checking and/or saving accounts',
      years: 5,
    },
    {
      type: 'Monitor client accounts and keep information up-to-date',
      years: 3,
    },
    {
      type: 'Resolve debit and credit issues',
      years: 2,
    },
  ];

  get experiencedServices(): any[] {
    return this.bankingServices.filter((s) => s.years > 2);
  }

  ngOnInit(): void {}

  constructor() {}
}
