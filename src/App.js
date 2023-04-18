import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';
import Navbar from './components/navbar';
import Header from './components/Header';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <Header theme={theme} setTheme={setTheme} />
            </>
        </ThemeProvider>
    );
}

export default App;
