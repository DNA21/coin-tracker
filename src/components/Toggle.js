import { HiSun, HiMoon } from 'react-icons/hi'

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <button onClick={toggleTheme}>
            {isLight
            ? <HiMoon className='fs-2 text-dark'/>
            : <HiSun className='fs-2 text-light'/>}
        </button>
    );
};

export default Toggle;
