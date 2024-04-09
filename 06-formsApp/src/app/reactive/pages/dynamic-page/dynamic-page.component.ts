import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [],
})
export class DynamicPageComponent {
  constructor(private formBuilder: FormBuilder) {}

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required, Validators.minLength(3)],
    favoriteGames: this.formBuilder.array([
      ['Death Stranding', Validators.required],
      ['Metal Gear Solid', Validators.required],
    ]),
  });

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
}
