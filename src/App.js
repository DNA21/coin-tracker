import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Account from './routes/Account';
import axios from 'axios';

function App() {
    const [theme, setTheme] = useState('light');
    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
            console.log(response.data)
        })
    }, [url]);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <Header theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path='/' element={ <Home coins={coins}/> } />
                    <Route path='/signin' element={ <SignIn /> } />
                    <Route path='/signup' element={ <SignUp /> } />
                    <Route path='/account' element={ <Account /> } />
                </Routes>
            </>
        </ThemeProvider>
    );
}

export default App;
