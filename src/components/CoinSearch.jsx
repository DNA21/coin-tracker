import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { Container } from 'reactstrap';

const CoinSearch = ({ coins }) => {
    const [searchCoin, setSearchCoin] = useState('');

    return (
        <Container className='bgSecondary rounded-4 mt-4'>
            <div className='d-flex d-column justify-content-between align-items-center my-2 py-2'>
                <h1 className='fs-3 fw-bold'>Search Crypto</h1>
                <form>
                    <input
                        onChange={(e) => setSearchCoin(e.target.value)}
                        className='px-4 py-2 rounded-5 shadow-lg bgButtonSecondary'
                        type='text'
                        placeholder='Search a coin'
                    />
                </form>
            </div>

            <table className='text-center w-100'>
                <thead>
                    <tr className='border-bottom'>
                        <th></th>
                        <th className='px-2'>#</th>
                        <th className='text-start'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className='d-none d-md-table-cell'>24h Volume</th>
                        <th className='d-none d-sm-table-cell'>Mkt</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.filter((value) => {
                        if(searchCoin === '') {
                            return value
                        } else if (value.name.toLowerCase().includes(searchCoin.toLowerCase())) {
                            return value
                        }
                    }).map((coin) => {
                        return(
                            <CoinItem key={coin.id} coin={coin} />
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export default CoinSearch;
