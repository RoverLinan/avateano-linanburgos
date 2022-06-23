export interface Pokemon{

  id: number;
  name: string;
  pic: string;
}

export interface PokemonDetails{
  name: string;
  eggGroup: string;
  habitat: string;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  imgUrl: string;
}



export interface PokemonSpecie {
  egg_groups:             any[];
  habitat:                any;
  has_gender_differences: boolean;
  hatch_counter:          number;
  id:                     number;
  is_baby:                boolean;
  is_legendary:           boolean;
  is_mythical:            boolean;
}




