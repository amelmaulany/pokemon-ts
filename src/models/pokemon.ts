export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Form;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  version: Form;
}

export interface HeldItem {
  item: Form;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Form;
}

export interface Move {
  move: Form;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Form;
  version_group: Form;
}

export interface Sprites {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  other: {
    dream_world: {
      front_default: null | string;
      front_female: null | string;
    };
    home: {
      front_default: null | string;
      front_female: null | string;
      front_shiny: null | string;
      front_shiny_female: null | string;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Form;
}

export interface Type {
  slot: number;
  type: Form;
}
