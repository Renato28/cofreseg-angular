import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rgValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const rg = control.value

    const rgPattern = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9]$/;

    return rgPattern.test(rg) ? null : { rgInvalid: true}
  }
}
