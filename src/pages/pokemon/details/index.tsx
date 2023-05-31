import { useParams } from "react-router-dom";
import Layout from "../../../components/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonAction } from "../../../store/slice/pokemon";
import { PokemonDetails } from "../../../models/pokemon";
import { Type } from "../../../models/pokemon";
import { getBgTypesColor, getBgTypesDarkColor } from "../../../hooks/typesColor";
import { Stat } from "../../../models/pokemon";
import { Encounter, LocationArea } from "../../../models/location";

export default function PokemonDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon: PokemonDetails = useSelector((state: any) => state.pokemon.pokemonDetails[0]);
    const state = useSelector((state: any) => state.pokemon);
    const evolution = useSelector((state: any) => state.pokemon.evolution);

    useEffect(() => {
        if (id) dispatch(pokemonAction.fetchById(id));
    }, []);

    useEffect(() => {
        if (pokemon) dispatch(pokemonAction.fetchEncounters(pokemon.location_area_encounters))
    }, [pokemon]);

    useEffect(() => {
        if (state.encounters.length > 0) {
            dispatch(pokemonAction.fetchLocationArea(state.encounters))
        }
    }, [state.encounters]);

    useEffect(() => {
        
    })

    return (
        <Layout>
            <div className="px-16 py-5 flex flex-col gap-6">
                <div className="flex flex-row justify-start items-center gap-10">
                    {
                        state.loadingDetails  || !pokemon ?
                        <p>Loading...</p> :
                        <div className="rounded-md w-full p-12" style={{ backgroundColor: pokemon.types ? getBgTypesColor(pokemon.types[0].type.name) : '#c1c1c1' }}>
                            <div className="flex flex-row items-center gap-9">
                                <img
                                    src={pokemon.sprites.other["official-artwork"].front_default}
                                    alt={pokemon.name}
                                    className="rounded-lg w-1/3"
                                />
                                <div className="flex flex-col justify-start gap-3 w-2/3">
                                    {/* name */}
                                    <div className="flex flex-row items-center gap-5">
                                        <p className="text-4xl font-semibold">
                                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                        </p>
                                        {pokemon.is_default && <div className="rounded-lg bg-orange-300 p-2"><b>default pokemon</b></div>}
                                    </div>
                                    {/* order */}
                                    <p className="text-2xl font-semibold text-gray-700 text-opacity-60">
                                        #00{pokemon.order}
                                    </p>

                                    <div className="flex flex-row gap-4">
                                        {/* types */}
                                        <div className="flex flex-row justify-start items-center gap-2 bg-slate-100 p-5 rounded-md w-full">
                                                <p className="text-lg"><b>Types&nbsp;&nbsp;</b></p> 
                                                <div className="flex flex-row gap-2">
                                                    {pokemon.types.map(
                                                        (type: Type) => 
                                                        <div className="p-3 w-auto rounded-md flex flex-row justify-start items-center gap-3 shadow-md bg-slate-300">
                                                            <p>{type.type.name}</p> <div className="h-4 w-4 rounded-full" style={{ backgroundColor: type ? getBgTypesColor(type.type.name) : '#c1c1c1' }}>&nbsp;</div>
                                                        </div>
                                                    )}
                                                </div>
                                        </div>

                                        {/* weight */}
                                        <div className="flex flex-row gap-4">
                                            <div className="flex flex-row justify-start items-center gap-2 bg-slate-100 p-5 rounded-md w-full">
                                                <p className="text-lg"><b>Weight:&nbsp;&nbsp;</b></p>
                                                <p>{pokemon.weight/10}&nbsp;kg</p>
                                            </div>
                                        </div>

                                        {/* height */}
                                        <div className="flex flex-row gap-4">
                                            <div className="flex flex-row justify-start items-center gap-2 bg-slate-100 p-5 rounded-md w-full">
                                                <p className="text-lg"><b>Height:&nbsp;&nbsp;</b></p>
                                                <p>{pokemon.height/10}&nbsp;m</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Location / Area */}
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row justify-start items-center gap-2 bg-slate-100 p-5 rounded-md w-full">
                                            <p className="text-lg"><b>Location Area Encounter:&nbsp;&nbsp;</b></p>
                                            <div className="flex flex-row gap-2">
                                                {state.locations.length > 0 ? state.locations.map(
                                                    (location: LocationArea) => 
                                                        <div className="p-3 w-auto rounded-md flex flex-row justify-start items-center gap-3 shadow-md bg-slate-300">
                                                            <div className="rounded-full bg-slate-300">{location.names[0].name}</div>
                                                        </div>
                                                ) : 'unknown'}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* stats */}
                            <div className="flex flex-col gap-3 bg-slate-100 p-6 rounded-md w-max">
                                <p className="text-lg"><b>Base Stats:</b></p>
                                <div className="flex flex-col justify-start items-start gap-1">
                                    {pokemon.stats.map((stat: Stat) => 
                                        <div className="flex flex-col justify-start items-start gap-2 p-3 rounded-md">
                                            <b>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</b>
                                            <div className="w-60 bg-slate-300 shadow-lg rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="h-2.5 rounded-full" style={{ width: stat.base_stat, backgroundColor: pokemon.types ? getBgTypesDarkColor(pokemon.types[0].type.name) : '#000'}}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* evolution */}
                            {evolution 
                                && evolution.length > 0 
                                &&  <div className="flex flex-row gap-3 bg-slate-100 p-6 rounded-md w-max">
                                        <div className="rounded-full">
                                            <img src={evolution.species} />
                                        </div>
                                    </div>
                            }
                            


                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
}