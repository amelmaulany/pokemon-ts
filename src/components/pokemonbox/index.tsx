import { getBgTypesColor } from "../../hooks/typesColor";

interface PokemonBoxProps {
    name?: string;
    loading: boolean;
    loadingDetails: boolean;
    image?: string;
    type?: string;
}

export default function PokemonBox({ name, loading, image, loadingDetails, type }: PokemonBoxProps) {
    return (
        <div className="border h-40 flex flex-row justify-between items-center p-8 rounded-xl" style={{ backgroundColor: type ? getBgTypesColor(type) : '#ffff' }}>
            <div className="flex flex-col justify-center items-start">
                {!loading 
                    ? 
                      <div className="flex flex-col justify-center items-start">
                        <p className="font-bold text-xl">
                            {name ? name.charAt(0).toUpperCase() + name.slice(1) : 'loading..'}
                        </p>
                        <p>
                            <b>Type:</b> {type ? type.charAt(0).toUpperCase() + type.slice(1) : 'loading...'}
                        </p>
                      </div>
                    : <div className="w-56 h-5 rounded-lg bg-slate-400 animate-pulse" />
                }
            </div>
            {loadingDetails
                ? <div className="h-12 w-12 bg-slate-400 rounded-full" />
                : <div className="z-10 flex flex-auto flex-row justify-center items-center">
                    <img src={image} alt={name} className="hover:transition-all h-36 hover:h-48" />
                  </div>
            }
        </div>
    )
}