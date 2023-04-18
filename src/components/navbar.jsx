import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import {FiMenu} from 'react-icons/fi'
import { Container,  } from 'reactstrap'

const Navbar = (props) => {
    const {theme, setTheme} = props;

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  return (
    <Container fluid className='d-flex justify-content-between align-items-center shadow-lg rounded-4 mt-4 fw-bold'>
        <Link className='text-link' to='/'>
            <h1>CryptoGecko</h1>
        </Link>
        <div className='d-none d-md-block'>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className='d-none d-md-block'>
            <Link className='text-link p-4 ' to='/signin'>Sign In</Link>
            <Link className='text-link sign-up-button px-4 py-2 rounded-5' to='/signup'>Sign Up</Link>
        </div>
        {/* Menu Icon */}
        <div className='d-block d-md-none'>
            <FiMenu />
        </div>
        {/* Mobile Menu*/}
        <div className='d-block d-md-none fixed-top offset-20'>
            <ul>
                <li>
                    <Link className='text-link' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='text-link' to='/account'>Account</Link>
                </li>
                <li>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </li>
            </ul>
            <div>
                <Link className='text-link' to='/signin'>
                    <button>Sign In</button>
                </Link>
                <Link className='text-link' to='/signup'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    </Container>
  )
}

export default Navbar;
