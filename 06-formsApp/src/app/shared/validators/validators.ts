import { FormControl } from '@angular/forms';

export const cantBeStrider = (control: FormControl) => {
  const value: string = control.value.trim().toLowerCase();

  if (value === 'strider') {
    return { noStrinder: true };
  }

  return null;
};
