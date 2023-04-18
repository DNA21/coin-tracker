import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Toggle from './Toggle';
import {FiMenu} from 'react-icons/fi';

const Header = (props) => {
    const {theme, setTheme} = props;

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const navbarTheme = (theme==='dark') ? 'navbar-dark' : 'navbar-light';

    return (
        <Navbar className={`${navbarTheme} d-flex justify-content-between align-items-center shadow-lg rounded-4 mt-4 fw-bold`} expand='md' sticky='top'>
            <NavbarBrand href='/'>
                <h1>CryptoGecko</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem className='d-block d-md-none'>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className='d-block d-md-none'>
                        <NavLink className='nav-link' to='/account'>
                            Account
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-link p-4' to='/signin'>Sign In</NavLink>
                        <NavLink className='text-link sign-up-button px-4 py-2 rounded-5' to='signup'>Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
