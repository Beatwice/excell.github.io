import React, { useState } from 'react';
import { Link } from "react-router-dom";
import white_logo from "../../assets/logo/WhiteLogo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
        <nav className='top-0 left-0 fixed w-full bg-gray-800 text-white flex px-20 h-14 max-sm:px-8 z-20'>
            <div className='flex max-ms:justify-between w-full items-center'>
                <div class="mr-16 max-sm:w-full">
                    <Link to="/">
                        <img src={white_logo} alt="Logo" className='w-16'/>
                    </Link>                    
                </div>
                
                <div className='sm:hidden'>
                    <button className=' px-1 py-1.5 border rounded text-white-300 border-white-400' onClick={toggleMenu}>
                        <div class="space-y-2">
                            <div class="w-7 bg-white border rounded"></div>
                            <div class="w-7 bg-white border rounded"></div>
                            <div class="w-7 bg-white border rounded"></div>
                        </div>
                    </button>
                </div>
                <div className={`md:flex max-sm:absolute top-14 left-0 md:top-10 md:left-10 max-sm:w-full ${isOpen ? 'flex' : 'hidden'}`}>
                    <ul className='md:flex gap-10 max-sm:w-full'>
                        <li className='max-sm:bg-gray-400 max-sm:text-center max-sm:h-12 max-sm:justify-center max-sm:flex max-sm:items-center'>
                            <Link to="/" className='hover:text-gray-300 duration-300'>Home</Link>
                        </li>
                        <li className='max-sm:bg-gray-400 max-sm:text-center max-sm:h-12 max-sm:justify-center max-sm:flex max-sm:items-center'>
                            <Link to="/experience" className='hover:text-gray-300 duration-300'>Experience</Link>
                        </li>
                        <li className='max-sm:bg-gray-400 max-sm:text-center max-sm:h-12 max-sm:justify-center max-sm:flex max-sm:items-center'>
                            <Link to="/project/development" className='hover:text-gray-300 duration-300'>Project</Link>
                        </li>
                        <li className='max-sm:bg-gray-400 max-sm:text-center max-sm:h-12 max-sm:justify-center max-sm:flex max-sm:items-center'>
                            <Link to="/contact" className='hover:text-gray-300 duration-300'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Header;