import { EventEmitter, Injectable, Output } from '@angular/core';
import { PokemonDetails} from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  @Output() disparadorDetails: EventEmitter<PokemonDetails> = new EventEmitter();

  constructor() { }
}
