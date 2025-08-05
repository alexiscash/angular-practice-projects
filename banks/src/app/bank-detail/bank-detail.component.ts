import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Bank } from '../bank';

@Component({
  selector: 'app-bank-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf],
  templateUrl: './bank-detail.component.html',
  styleUrl: './bank-detail.component.css',
})
export class BankDetailComponent {
  @Input() bank!: Bank;

  constructor() {}

  ngOnInit(): void {}
}
