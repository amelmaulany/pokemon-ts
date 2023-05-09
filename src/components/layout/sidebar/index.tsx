import React, { RefObject, useState } from 'react';
import Logo from '../../../assets/full-logo.png';
import PokemonIcon from '../../../assets/pokemon-logos.png';
import CloseIcon from '../../../assets/close.svg';
import { useNavigate } from 'react-router-dom';

interface SideBarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SideBarProps) {
    const navigate = useNavigate();
    const menus = [
        {
            id: 1,
            label: 'Evolution',
            link: '/evolution'
        },
        {
            id: 2,
            label: 'Moves',
            link: '/moves',
        },
        {
            id: 3,
            label: 'Items',
            link: '/items',
        },
    ];

    return (
        <>
        {open ? (
            <div className='flex z-99 flex-col h-screen shadow-lg w-64 ease-out duration-300 p-3 justify-start items-center'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <img src={Logo} className='h-10 w-auto' onClick={() => navigate('/')}/>
                    <img src={CloseIcon} className='h-5' onClick={() => setOpen(false)} />
                </div>
                <div className="mt-4 flex flex-col justify-start items-center w-full">
                    {menus.map((item) => (
                        <div 
                            className='hover:bg-gray-50 hover:text-gray-600 devide-inherit p-2 w-full'
                            onClick={() => navigate(item.link)}
                        >
                            <div key={item.id}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>) : (
            <div className='w-0'></div>)}
        </>  
    );
}