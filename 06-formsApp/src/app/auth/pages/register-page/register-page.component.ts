import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidatorsService
  ) {}

  public myForm: FormGroup = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validationService.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validationService.emailPattern),
      ],
    ],
    username: ['', [Validators.required, this.validationService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string) {
    this.validationService.isValidField(this.myForm, field);
  }
}
