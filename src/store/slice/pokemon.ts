import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonDetails } from "../../models/pokemon";
import { ListResponse } from '../../models/fetch';

export interface PokemonProps {
    loading: boolean;
    loadingDetails: boolean;
    pokemons: Pokemon[];
    pokemonDetails: PokemonDetails[];
}

const initialState: PokemonProps = {
    loading: false,
    loadingDetails: false,
    pokemons: [],
    pokemonDetails: [],
};

const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchData(state: PokemonProps) {
        state.loading = true;
    },
    fetchDataSuccess(state: PokemonProps, action: PayloadAction<ListResponse<Pokemon>>) {
        state.loading = false;
        state.pokemons = action.payload.results;
    },
    fetchDataFailed(state: PokemonProps) {
        state.loading = false;
    },
    fetchDetails(state: PokemonProps) {
        state.loadingDetails = true;
    },
    fetchDetailsSuccess(state: PokemonProps, action: PayloadAction<PokemonDetails[]>) {
        state.loadingDetails = false;
        state.pokemonDetails = action.payload;
    },
    fetchDetailsFailed(state: PokemonProps) {
        state.loadingDetails = false;
    },
  }
});

export const pokemonAction = PokemonSlice.actions;
export const pokemonReducer = PokemonSlice.reducer;

export default pokemonReducer;