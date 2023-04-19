import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div className='header'>
            <Link smooth to='app'>Home</Link>
            {/* <Link smooth to='about'>About</Link> */}
            <Link smooth to='skils'>Skils</Link>
            <Link smooth to='projects' >Portfolio</Link>
            <Link smooth to='contact_wrapper' >Contact</Link>
        </div>
    )
}

export default Header
