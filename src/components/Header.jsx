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

    return (
        <Navbar className={`${(theme==='dark') ? 'navbar-dark' : 'navbar-light'} d-flex bgSecondary justify-content-between align-items-center shadow-lg rounded-4 mt-4 fw-bold`} expand='md' sticky='top'>
            <NavbarBrand href='/'>
                <h1>CryptoGecko</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <div>
                    <NavItem className='d-block d-md-none'>
                        <NavLink className='nav-link border-bottom py-5' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className='d-block d-md-none'>
                        <NavLink className='nav-link border-bottom py-5' to='/account'>
                            Account
                        </NavLink>
                    </NavItem>
                    <NavItem  className='py-5'>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                    </NavItem>
                    </div>
                    <div>
                    {/* Navbar Sign in/out */}
                    <NavItem className='d-none d-md-block'>
                        <NavLink className='text-link p-4' to='/signin'>Sign In</NavLink>
                        <NavLink className='text-link sign-up-button px-4 py-2 rounded-5' to='signup'>Sign Up</NavLink>
                    </NavItem>
                    {/* Collapsed Sign in/out */}
                    <NavItem className='py-4 d-block d-md-none d-flex flex-column'>
                        <NavLink className='sign-in-button text-link px-4 py-2 rounded-5 mb-2 text-center shadow-lg' to='/signin'>Sign In</NavLink>
                        <NavLink className='text-link sign-up-button px-4 py-2 rounded-5 text-center' to='signup'>Sign Up</NavLink>
                    </NavItem>
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
