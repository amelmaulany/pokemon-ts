import { Form } from "./pokemon";

export interface Encounter {
  location_area: Form;
  version_details: VersionDetailPokemonEncounter[];
}

export interface LocationArea {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: Form;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
  encounter_method: Form;
  version_details: VersionDetailLocation[];
}

export interface VersionDetailLocation {
  rate: number;
  version: Form;
}

export interface Name {
  language: Form;
  name: string;
}

export interface PokemonEncounter {
  pokemon: Form;
  version_details: VersionDetailPokemonEncounter[];
}

export interface VersionDetailPokemonEncounter {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: Form;
}

export interface EncounterDetail {
  chance: number;
  condition_values: Form[];
  max_level: number;
  method: Form;
  min_level: number;
}
