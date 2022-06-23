import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pokemon[], page: number = 0): Pokemon[] {
    return value.slice(page,page+10);
  }

}
