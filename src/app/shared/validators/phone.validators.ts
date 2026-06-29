import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.replace(/\D/g, '') ?? '';
    const valid = /^(221)?(7[05678]\d{7})$/.test(value);
    return valid ? null : { invalidPhone: true };
  };
}

export function differentPhoneValidator(currentPhone: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const raw = control.value?.replace(/\D/g, '') ?? '';
    const current = currentPhone.replace(/\D/g, '');
    return raw === current ? { samePhone: true } : null;
  };
}
