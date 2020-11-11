import { Directive } from '@angular/core';
import {FormBuilder, ValidationErrors, ValidatorFn} from '@angular/forms';

class ValidateErrors {
}

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {

  constructor() { }

  export const PassMatch: ValidatorFn = (control: FormBuilder): ValidationErrors | null =>
  {
    const password = control.get('password');
    const confPassword = control.get('confPassword');

    return password && confPassword && password.value === confPassword.value ? {PassMatch: true} ? false;
  }

}
