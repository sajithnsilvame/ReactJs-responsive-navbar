import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

function Navbar() {

    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <a href="https://reactjs.org/"><h1 className='w-full text-3xl font-bold text-[#00df9a] ml-2 link-cursor'>REACT.</h1></a>
        <ul className='hidden md:flex link-cursor'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden link-cursor'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <a href="https://reactjs.org/"><h1 className='w-full text-3xl font-bold text-[#00df9a] ml-2 link-cursor'>REACT.</h1></a>
                    <ul className='uppercase p-4 link-cursor'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>Resources</li>
                        <li className='p-4 border-b border-gray-600'>About</li>
                        <li className='p-4 '>Contact</li>
                    </ul>
        </div>
    </div>
  )
}

export default Navbar
