import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BANKS } from '../banks';
import { Bank } from '../bank';
import { BankDetailComponent } from '../bank-detail/bank-detail.component';

@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [NgFor, BankDetailComponent],
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.css',
})
export class BanksComponent {
  banks = BANKS;
  selectedBank!: Bank;

  constructor() {}

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }

  ngOnInit(): void {}
}
