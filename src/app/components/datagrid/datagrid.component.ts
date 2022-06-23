import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails, PokemonSpecie } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  items : Pokemon[] = [];
  col = 1;
  page: number = 0;
  constructor( private pokemonService: PokemonService, private pokemonDetailService: PokemonDetailService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(
      result => {
        this.items = result;
      }
    );

    this.paginationService.disparadorPage.subscribe(
      resut =>{
        this.page == 0 && resut== -10? this.page = 0 : this.page += resut ;
      }
    );

  }

  detailPokemon(idPokemon: number){

    this.pokemonService.getSpeciePokemon(idPokemon).subscribe(
      resp => {
        this.pokemonDetailService.disparadorDetails.emit(this.mapperResponse(resp,idPokemon));
      }
    );
  }

  mapperResponse( data: PokemonSpecie , idPokemon: number): PokemonDetails{

    const pokemonAux =  this.items.find( pokemon => pokemon.id == idPokemon);

    return {
      name: pokemonAux?.name || "",
      imgUrl: pokemonAux?.pic || "" ,
      eggGroup: data.egg_groups[0],
      habitat: data.habitat.name,
      isBaby: data.is_baby,
      isLegendary: data.is_legendary,
      isMythical: data.is_mythical
    }
  }

}
