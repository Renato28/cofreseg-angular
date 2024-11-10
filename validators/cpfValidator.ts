import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;

    const cpfPattern = /^(?!.*(\d)\1{10})(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;

    return cpfPattern.test(cpf) ? null : { cpfInvalid: true}
  }
}
