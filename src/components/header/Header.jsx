import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div className='header'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skils</Link>
            <Link>Portfolio</Link>
            <Link>Contact</Link>
        </div>
    )
}

export default Header
