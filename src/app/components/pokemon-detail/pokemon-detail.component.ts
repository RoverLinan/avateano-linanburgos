import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/pokemon.interface';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: any;

  constructor( private pokemonDetailService: PokemonDetailService) { }

  ngOnInit(): void {
    this.pokemonDetailService.disparadorDetails.subscribe(
        resp => {
          console.log(resp);
          this.pokemonDetail = resp;
        }
    );
  }
}
