import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Toggle from './Toggle';
import { UserAuth } from '../context/AuthContext';

const Header = (props) => {
    const {theme, setTheme} = props;

    const [menuOpen, setMenuOpen] = useState(false);

    const{ user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <Container className='px-0'>
            <Navbar className={`${(theme==='dark') ? 'navbar-dark' : 'navbar-light'} d-flex bgSecondary justify-content-between align-items-center shadow-lg rounded-4 mt-4 fw-bold`} expand='md' sticky='top'>
                <NavbarBrand href='/'>
                    <h1 className='fs-3'>CryptoGecko</h1>
                </NavbarBrand>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar className={`${menuOpen ? 'nav-collapse bgSecondary' : ''}`}>
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
                        <NavItem className='d-none d-md-block'>
                            <Toggle theme={theme} toggleTheme={toggleTheme} />
                        </NavItem>
                        <NavItem  className='d-block d-md-none py-5'>
                            <Toggle theme={theme} toggleTheme={toggleTheme} />
                        </NavItem>
                        </div>

                        {user?.email ? (
                            <>
                                <div className='d-flex align-items-center'>
                                    {/* Navbar Account / Sign Out */}
                                    <NavItem className='d-none d-md-block'>
                                        <NavLink className='bgButtonSecondary text-link px-4 py-2 rounded-5 shadow-lg mx-2' to='/account'>Account</NavLink>
                                        <button onClick={handleSignOut} className='text-link bgButton px-4 py-2 rounded-5'>Sign Out</button>
                                    </NavItem>
                                </div>
                                <div>
                                    {/* Collapsed Sign Out */}
                                    <NavItem className='py-4 d-block d-md-none d-flex flex-column'>
                                        <button className='text-link bgButton px-4 py-2 rounded-5 text-center'>Sign Out</button>
                                    </NavItem>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='d-flex align-items-center'>
                                    {/* Navbar Sign in/up */}
                                    <NavItem className='d-none d-md-block'>
                                        <NavLink className='bgButtonSecondary text-link px-4 py-2 rounded-5 shadow-lg mx-2' to='/signin'>Sign In</NavLink>
                                        <NavLink className='text-link bgButton px-4 py-2 rounded-5' to='signup'>Sign Up</NavLink>
                                    </NavItem>
                                </div>
                                <div>
                                    {/* Collapsed Sign in/up */}
                                    <NavItem className='py-4 d-block d-md-none d-flex flex-column'>
                                        <NavLink className='bgButtonSecondary text-link px-4 py-2 rounded-5 mb-2 text-center shadow-lg' to='/signin'>Sign In</NavLink>
                                        <NavLink className='text-link bgButton px-4 py-2 rounded-5 text-center' to='signup'>Sign Up</NavLink>
                                    </NavItem>
                                </div>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;
