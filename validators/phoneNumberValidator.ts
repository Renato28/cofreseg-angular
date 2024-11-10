import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value;

    const phoneNumberPattern = /^(\(?\d{2}\)?\s?)?(9\d{4})-?\d{4}$/;

    return phoneNumberPattern.test(phoneNumber) ? null : {phoneNumberInvalid: true}
  }
}
