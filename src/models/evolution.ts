import { Form } from "../models/pokemon";

export interface Evolution {
  baby_trigger_item: null | any;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolution_to: EvolutionTo[];
}

export interface EvolutionDetail {
  gender: null | any;
  held_item: null | any;
  item: null | any;
  known_move: null | any;
  known_move_type: null | any;
  location: null | any;
  min_affection: null | any;
  min_beauty: null | any;
  min_happiness: null | any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null | any;
  party_type: null | any;
  relative_physical_stats: null | any;
  time_of_day: string;
  trade_species: null | any;
  trigger: Form;
  turn_upside_down: boolean;
}

export interface EvolutionTo {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionToDetails[];
  is_baby: boolean;
  species: Form;
}

export interface EvolutionToDetails {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionToDetails[];
  is_baby: boolean;
  species: Form;
}

export interface EvolutionChain {
  index: number;
  name: string;
  image?: string;
}
