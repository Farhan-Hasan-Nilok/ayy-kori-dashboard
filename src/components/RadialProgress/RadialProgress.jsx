import { Circle } from 'rc-progress';
import React from 'react';

const RadialProgress = ({ color, percent, title, quantity, arrow }) => {
    return (
        <div className='flex flex-1 p-4 flex-wrap items-center justify-between w-full md:w-64 rounded-md mt-5'>
            <div className='space-y-1'>
                <h3 className='text-xl font-medium'>{title}</h3>
                <h3 className='text-2xl font-bold'>{quantity}</h3>
                <div className={`bg-light-green rounded-full p-1 w-6 text-[${color}]`}>
                    {arrow}
                </div>
            </div>
            <div className='relative'>
                <Circle className='w-16' percent={70} strokeWidth={5} trailWidth={5} strokeColor={color} />
                <div className={`absolute top-5 left-4 font-medium text-[${color}]`}>80%</div>
            </div>
        </div>
    );
};

export default RadialProgress;