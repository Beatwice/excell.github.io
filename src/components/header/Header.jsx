import React, { Component} from 'react';
import { Link } from "react-router-dom";
import white_logo from "../../assets/logo/WhiteLogo.png";

const Header = () => {
    return(
        <div>
             <nav className='bg-gray-800 text-white flex px-20 justify-between h-14 items-center	'>
                <div className='flex items-center'>
                    <div className='mr-16 items-center'>
                    <Link to="/">
                        <img src={white_logo} alt="Logo" style={{width:'60px'}} />
                    </Link>
                    </div>
                    <ul className='flex gap-10'>
                        <li>
                            <Link to="/" className='hover:text-gray-300 duration-300' >Home</Link>
                        </li>
                        <li>
                            <Link  to="/experience" className='hover:text-gray-300 duration-300'>Experience</Link>
                        </li>
                        <li>
                            <Link to="/project/development" className='hover:text-gray-300 duration-300'>Project</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='hover:text-gray-300 duration-300'>Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* {toggleTheme()} */}
            </nav>
        </div>
    );
}

export default Header;