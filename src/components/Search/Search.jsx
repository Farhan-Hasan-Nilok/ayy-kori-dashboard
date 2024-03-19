import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
const Search = ({ placeholder }) => {
    return (
        <div className='relative w-full max-w-md'>
            <input type="text" placeholder={placeholder}
                className='border-[1px] p-2.5 max-w-md w-full focus:outline-primary 
                rounded-md bg-light-green px-3'
            />
            <div className='bg-primary p-3 absolute right-0 top-0 rounded-md text-white cursor-pointer'>
                <IoSearchOutline size={20} className='' />
            </div>
        </div>
    );
};

export default Search;