import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reactive-form-example';
  honorifics = ['Dr.', 'Mr.', 'Mrs.', 'Ms.'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['john.doe', 'jane.doe'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      honorific: new FormControl('Mrs.'),
      interests: new FormArray([]),
    });

    this.signupForm.statusChanges.subscribe(console.log);

    this.signupForm.setValue({
      userData: {
        username: 'jane.smith',
        email: 'jane.smith@email.com',
      },
      honorific: 'male',
      interests: [],
    });

    this.signupForm.patchValue({
      userData: {
        username: 'jane.doe',
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  getTouched() {
    return (this.signupForm.get('userData.username') as FormGroup).touched;
  }

  getValid() {
    return (this.signupForm.get('userData.username') as FormGroup).valid;
  }

  onAddInterest() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('interests')).push(control);
  }

  getControls() {
    return (this.signupForm.get('interests') as FormArray).controls;
  }

  getNameForbidden() {
    return (this.signupForm.get('userData.username') as FormGroup).errors?.[
      'nameIsForbidden'
    ];
  }

  getNameRequired() {
    return (this.signupForm.get('userData.username') as FormGroup).errors?.[
      'required'
    ];
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
