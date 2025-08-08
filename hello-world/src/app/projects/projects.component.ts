import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  firstName: string = 'William';
  lastName: string = 'Wallace';
  phoneNumber: string = '(201)-748-6000';

  setProperty(event: Event): void {
    const target = event.target as HTMLInputElement;
    const property: string = target.id;

    switch (property) {
      case 'firstNameInput':
        this.firstName = target.value;
        break;
      case 'lastNameInput':
        this.lastName = target.value;
        break;
      case 'phoneNumberInput':
        this.phoneNumber = target.value;
        break;
      default:
        console.warn('No matching ID found');
        break;
    }
  }
}
