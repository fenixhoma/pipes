import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'colores'
})
export class ColoresPipe implements PipeTransform {

  transform(input: Color): string {
    switch (input) {
      case Color.rojo:
        return 'red';
      case Color.azul:
        return 'blue';
      case Color.amarillo:
        return 'yellow';
      case Color.blanco:
        return 'white';
      case Color.verde:
        return 'green';
      case Color.negro:
        return 'black';
      case Color.plata:
        return '#a8a9ad';
      default:
        return '#FFFFFF';
    }
  }

}
