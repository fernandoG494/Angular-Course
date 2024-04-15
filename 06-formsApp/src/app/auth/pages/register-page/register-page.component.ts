import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  constructor(private formBuilder: FormBuilder) {}

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.pattern(customValidators.emailPattern)],
    ],
    username: ['', [Validators.required, customValidators.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

  isValidField() {
    // TODO: obtener validaciones de servicio
  }
}
