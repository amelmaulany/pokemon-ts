import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonDetails } from "../../models/pokemon";
import { ListResponse } from "../../models/fetch";
import { Encounter, LocationArea } from "../../models/location";
import { Evolution, EvolutionChain } from "../../models/evolution";

export interface PokemonProps {
  loading: boolean;
  loadingDetails: boolean;
  loadingLocationArea: boolean;
  loadingEvolution: boolean;
  pokemons: Pokemon[];
  pokemonDetails: PokemonDetails[];
  encounters: Encounter[];
  locations: LocationArea[];
  evolution: Evolution | null;
  evolutionChainData: EvolutionChain[];
}

const initialState: PokemonProps = {
  loading: false,
  loadingDetails: false,
  loadingLocationArea: false,
  loadingEvolution: false,
  pokemons: [],
  pokemonDetails: [],
  encounters: [],
  locations: [],
  evolution: null,
  evolutionChainData: [],
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    fetchData(state: PokemonProps) {
      state.loading = true;
    },
    fetchDataSuccess(
      state: PokemonProps,
      action: PayloadAction<ListResponse<Pokemon>>
    ) {
      state.loading = false;
      state.pokemons = action.payload.results;
    },
    fetchDataFailed(state: PokemonProps) {
      state.loading = false;
    },
    fetchDetails(state: PokemonProps) {
      state.loadingDetails = true;
    },
    fetchDetailsSuccess(
      state: PokemonProps,
      action: PayloadAction<PokemonDetails[]>
    ) {
      state.loadingDetails = false;
      state.pokemonDetails = action.payload;
    },
    fetchDetailsFailed(state: PokemonProps) {
      state.loadingDetails = false;
    },
    fetchById(state: PokemonProps, action: PayloadAction<number | string>) {
      state.loadingDetails = true;
    },
    fetchByIdSuccess(
      state: PokemonProps,
      action: PayloadAction<PokemonDetails>
    ) {
      state.loadingDetails = false;
      state.pokemonDetails = [action.payload];
    },
    fetchByIdFailed(state: PokemonProps) {
      state.loadingDetails = false;
    },
    fetchEncounters(state: PokemonProps, action: PayloadAction<string>) {
      state.loadingLocationArea = true;
    },
    fetchEncountersSuccess(
      state: PokemonProps,
      action: PayloadAction<Encounter[]>
    ) {
      state.loadingLocationArea = false;
      state.encounters = action.payload;
    },
    fetchLocationArea(state: PokemonProps, action: PayloadAction<Encounter[]>) {
      state.loadingLocationArea = true;
    },
    fetchLocationAreaSuccess(
      state: PokemonProps,
      action: PayloadAction<LocationArea[]>
    ) {
      state.loadingLocationArea = false;
      state.locations = action.payload;
    },
    fetchEvolution(
      state: PokemonProps,
      action: PayloadAction<number | string>
    ) {
      state.loadingEvolution = true;
    },
    fetchEvolutionSuccess(
      state: PokemonProps,
      action: PayloadAction<Evolution>
    ) {
      state.loadingEvolution = false;
      state.evolution = action.payload;
    },
    fetchEvolutionChain(state: PokemonProps, action: PayloadAction<string[]>) {
      state.loadingEvolution = false;
    },
    fetchEvolutionChainSuccess(
      state: PokemonProps,
      action: PayloadAction<EvolutionChain[]>
    ) {
      state.loadingEvolution = false;
      state.evolutionChainData = action.payload;
    },
  },
});

export const pokemonAction = PokemonSlice.actions;
export const pokemonReducer = PokemonSlice.reducer;

export default pokemonReducer;
