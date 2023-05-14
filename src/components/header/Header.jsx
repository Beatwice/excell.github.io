import React, { Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component 
{
    render ()
    {
        return (
            <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            </>
        );
    }
}

export default Header;