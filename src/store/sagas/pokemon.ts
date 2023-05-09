import { ListResponse } from "../../models/fetch";
import { Pokemon, PokemonDetails } from "../../models/pokemon";
import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as service from '../../services/pokemon';
import { pokemonAction } from "../slice/pokemon";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchData() {
    try {
        const response: ListResponse<Pokemon> = yield call(service.fetchData);
        console.log('response saga: ', response);
        yield put(pokemonAction.fetchDataSuccess(response));
    } catch (err) {
        if (typeof err === 'string') alert('error get pokemon data: '+err);
        else alert('error get pokemon data, please try again later.');
    }
}

function* fetchDetails() {
    try {
        const pokemons: Pokemon[] = yield select((state: any) => state.pokemon.pokemons);
        let responseArr: PokemonDetails[] = [];

        for (let i = 0; i < pokemons.length; i ++) {
            const response: PokemonDetails = yield call(service.fetchDetails, pokemons[i].url);
            responseArr.push(response);
        }
        yield put(pokemonAction.fetchDetailsSuccess(responseArr));
    } catch (err) {
        if (typeof err === 'string') alert('error get pokemon details data: '+err);
        else alert('error get pokemon details data, please try again later');
    }
}

export default function* pokemonSaga() {
    yield takeLatest(pokemonAction.fetchData.type, fetchData);
    yield takeLatest(pokemonAction.fetchDetails.type, fetchDetails);
}