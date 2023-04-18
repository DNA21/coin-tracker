import styled from "styled-components";
import { HiSun, HiMoon } from 'react-icons/hi'

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <button onClick={toggleTheme}>
            {isLight ? <HiMoon /> : <HiSun />}
        </button>
    );
};

export default Toggle;
