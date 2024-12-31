import { Pipe, PipeTransform } from '@angular/core';
/**
 * Funciona como un transformador de datos, invirtiendo el orden de los elementos de un array.
 */
@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
