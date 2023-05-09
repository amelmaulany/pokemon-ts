import React from 'react';
import PokemonIcon from '../../../assets/pokemon-logos.png';
import Logo from '../../../assets/full-logo.png';

interface TopBarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function TopBar({ open, setOpen }: TopBarProps) {
    return (
        <div className='h-16 shadow-lg w-full flex flex-row justify-start items-center pl-5'>
            {!open ? <img src={PokemonIcon} className='h-8 w-8' onClick={() => setOpen(!open)} /> : <></>}
            <div className="w-full h-full flex flex-row justify-center items-center">
                <img src={Logo} className="h-10" onClick={() => setOpen(false)}/>
            </div>
        </div>
    )
}