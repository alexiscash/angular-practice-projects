import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  display: string = '0';

  appendInput(value: string): void {
    if (this.display === '0') {
      this.display = value;
      return;
    }
    this.display += value;
  }

  clear(): void {
    this.display = '0';
  }

  calculate(): void {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}
