import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'xof', standalone: true })
export class XofPipe implements PipeTransform {
  private readonly fmt = new Intl.NumberFormat('fr-SN', { style: 'currency', currency: 'XOF' });
  transform(value: number | null | undefined): string {
    return this.fmt.format(value ?? 0);
  }
}
