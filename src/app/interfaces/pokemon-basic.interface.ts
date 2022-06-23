
export interface PokemonBasic{

  name: string;
  url: string;

}

export interface PokemonFetch{
  count: number;
  results: PokemonBasic[];
}


