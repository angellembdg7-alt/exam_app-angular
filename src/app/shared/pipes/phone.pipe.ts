import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone', standalone: true })
export class PhonePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const digits = value.replace(/\D/g, '').replace(/^221/, '');
    const match = digits.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);
    return match ? `+221 ${match[1]} ${match[2]} ${match[3]} ${match[4]}` : value;
  }
}
