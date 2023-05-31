import { ListResponse } from "../../models/fetch";
import { Pokemon, PokemonDetails } from "../../models/pokemon";
import { call, put, select, takeLatest } from "redux-saga/effects";
import * as service from "../../services/pokemon";
import { pokemonAction } from "../slice/pokemon";
import { PayloadAction } from "@reduxjs/toolkit";
import { Encounter, LocationArea } from "../../models/location";
import { fetchEncounterLocation } from "../../services/location";
import { Evolution, EvolutionChain } from "../../models/evolution";
import { fetchEvolutionChain } from "../../services/evolution";

function* fetchData() {
  try {
    const response: ListResponse<Pokemon> = yield call(service.fetchData);
    console.log("response saga: ", response);
    yield put(pokemonAction.fetchDataSuccess(response));
  } catch (err) {
    if (typeof err === "string") alert("error get pokemon data: " + err);
    else alert("error get pokemon data, please try again later.");
  }
}

function* fetchDetails() {
  try {
    const pokemons: Pokemon[] = yield select(
      (state: any) => state.pokemon.pokemons
    );
    let responseArr: PokemonDetails[] = [];

    for (let i = 0; i < pokemons.length; i++) {
      const response: PokemonDetails = yield call(
        service.fetchDetails,
        pokemons[i].url
      );
      responseArr.push(response);
    }
    yield put(pokemonAction.fetchDetailsSuccess(responseArr));
  } catch (err) {
    if (typeof err === "string")
      alert("error get pokemon details data: " + err);
    else alert("error get pokemon details data, please try again later");
  }
}

function* fetchById(action: PayloadAction<number | string>) {
  try {
    const response: PokemonDetails = yield call(
      service.fetchById,
      action.payload
    );
    yield put(pokemonAction.fetchByIdSuccess(response));
  } catch (err) {
    if (typeof err === "string")
      alert("error get pokemon details data: " + err);
    else alert("error get pokemon details data, please try again later");
  }
}

function* fetchEncounters(action: PayloadAction<string>) {
  try {
    const response: Encounter[] = yield call(
      fetchEncounterLocation,
      action.payload
    );
    yield put(pokemonAction.fetchEncountersSuccess(response));
  } catch (err) {
    if (typeof err === "string") alert("error get encounter data: " + err);
    else alert("error get encounter data, please try again later");
  }
}

function* fetchLocation(action: PayloadAction<Encounter[]>) {
  try {
    let locations: LocationArea[] = [];
    for (let i = 0; i < action.payload.length; i++) {
      const response: LocationArea = yield call(
        fetchEncounterLocation,
        action.payload[i].location_area.url
      );
      locations.push(response);
    }
    yield put(pokemonAction.fetchLocationAreaSuccess(locations));
  } catch (err) {
    if (typeof err === "string") alert("error get location data: " + err);
    else alert("error get location data, please try again later");
  }
}

function* fetchEvolution(action: PayloadAction<number | string>) {
  try {
    const response: Evolution = yield call(fetchEvolutionChain, action.payload);
    yield put(pokemonAction.fetchEvolutionSuccess(response));
  } catch (err) {
    if (typeof err === "string") alert("error get evolution data: " + err);
    else alert("error get evolution data, please try again later");
  }
}

function* fetchEvolutionChainData(action: PayloadAction<string[]>) {
  try {
    let response: EvolutionChain[] = [];
    for (let i = 0; i < action.payload.length; i++) {
      const data: EvolutionChain = yield call(
        fetchEvolutionChain,
        action.payload[i]
      );
      response.push({
        index: i,
        name: data.name,
        // image:
      });
    }
    yield put(pokemonAction.fetchEvolutionChainSuccess(response));
  } catch (err) {
    if (typeof err === "string")
      alert("error get evolution chain data: " + err);
    else alert("error get evolution chain data, please try again later");
  }
}

export default function* pokemonSaga() {
  yield takeLatest(pokemonAction.fetchData.type, fetchData);
  yield takeLatest(pokemonAction.fetchDetails.type, fetchDetails);
  yield takeLatest(pokemonAction.fetchById.type, fetchById);
  yield takeLatest(pokemonAction.fetchEncounters.type, fetchEncounters);
  yield takeLatest(pokemonAction.fetchLocationArea.type, fetchLocation);
  yield takeLatest(pokemonAction.fetchEvolution.type, fetchEvolution);
}
