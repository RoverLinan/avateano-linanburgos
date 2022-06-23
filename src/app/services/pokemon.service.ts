import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokemonFetch } from '../interfaces/pokemon-basic.interface';
import { Pokemon, PokemonDetails, PokemonSpecie } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private URL: string = "https://pokeapi.co/api/v2";
  private URL_SPECIE: string = "https://pokeapi.co/api/v2/pokemon-species/";
  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<PokemonFetch>(this.URL+"/pokemon?limit=500")
      .pipe(
        map( this.adapterPokemon )
      );
  }

  getSpeciePokemon(idPokemon: number){
    return this.http.get<PokemonSpecie>(`${this.URL_SPECIE.concat(idPokemon.toString())}`);
  }

  private adapterPokemon( response: PokemonFetch){

    const list: Pokemon[] =  response.results.map( pokemon => {

      const toArray: string[] = pokemon.url.split("/");
      return {
        id: Number.parseInt(toArray[6]),
        name: pokemon.name.toUpperCase(),
        pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${toArray[6]}.png`,
      }
    });

    return list;

  }
}
