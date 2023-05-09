import React from 'react';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

interface PaginationProps {
    totalPage: number;
    currentPage: number;
}

export default function Pagination({ totalPage, currentPage }: PaginationProps) {
    return (
        <div className="flex flex-row p-3 rounded-md w-fit gap-2">
            <div className='w-10 flex flex-row justify-center items-center border rounded-md hover:bg-slate-50'>
                <img src={ArrowLeft} alt="arrow left" className='h-6 w-6' />
            </div>
            <div className='border p-3 rounded-md'>
                {currentPage} / {totalPage}
            </div>
            <div className='w-10 flex flex-row justify-center items-center border rounded-md hover:bg-slate-50'>
                <img src={ArrowRight} alt="arrow right" className='h-6 w-6'/>
            </div>
        </div>
        );
}