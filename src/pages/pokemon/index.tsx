import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import PokemonBox from '../../components/pokemonbox';
import axios from 'axios';
import Pagination from '../../components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonProps, pokemonAction } from '../../store/slice/pokemon';
import { Pokemon } from '../../models/pokemon';
import { useNavigate } from 'react-router-dom';

export default function PokemonPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pokemons = useSelector((state: any) => state.pokemon.pokemons);
    const pokemonData: PokemonProps = useSelector((state: any) => state.pokemon);

    useEffect(() => {
        dispatch(pokemonAction.fetchData());
    }, []);

    useEffect(() => {
        if (pokemons.length > 0) dispatch(pokemonAction.fetchDetails());
    }, [pokemons]);

    return (
        <Layout>
            <div className="px-16 py-5 grid grid-cols-3 gap-6">
                {!pokemonData.loading && !pokemonData.loadingDetails && pokemonData.pokemonDetails.length > 0
                    ? pokemons.map(
                        (pokemon: Pokemon, i: number) => 
                            <div onClick={() => navigate(`/pokemon/${pokemonData.pokemonDetails[i].id}`)}>
                                <PokemonBox
                                  name={pokemon.name}
                                  loading={pokemonData.loadingDetails}
                                  image={pokemonData.pokemonDetails[i].sprites.front_default}
                                  loadingDetails={pokemonData.loadingDetails}
                                  type={pokemonData.pokemonDetails[i].types[0].type.name}
                                />                                
                            </div>

                        )
                    :
                    [1,2,3,4,5,6,7,8,9,10].map((item) => <PokemonBox loading={true} loadingDetails={true} />)}   
            </div>
        </Layout>
    );
}