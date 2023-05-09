import React, { useState } from 'react';
import TopBar from './topbar';
import Sidebar from './sidebar';

interface Layout {
    children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Layout) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-row m-0 border border-solid">
            <Sidebar open={open} setOpen={setOpen} />
            <div className='flex flex-col w-full'>
                <TopBar open={open} setOpen={setOpen} />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}