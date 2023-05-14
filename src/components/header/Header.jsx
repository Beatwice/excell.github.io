import React, { Component} from 'react';
import { Link } from "react-router-dom";
import white_logo from "../../assets/logo/WhiteLogo.png";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
class Header extends Component 
{
    render ()
    {
        return (
            <>
            <nav className='bg-gray-800 text-white flex px-20 justify-between h-14 items-center	'>
                <div className='flex items-center'>
                    <div className='mr-16 items-center'>
                        <img src={white_logo} alt="Logo" style={{width:'60px'}} />
                    </div>
                    <ul className='flex'>
                        <li className='mr-10 visited:bg-neutral'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='mr-10'>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li className='mr-10'>
                            <Link to="/project">Project</Link>
                        </li>
                        <li className='mr-10'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    "Dark Mode"
                </div>
            </nav>
            </>
        );
    }
}

export default Header;