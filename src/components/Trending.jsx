import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container } from 'reactstrap';


const Trending = () => {
    const [trending, setTrending] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setTrending(response.data.coins)
            console.log(response.data.coins)
        });
    }, []);

    return (
        <Container className='bgSecondary rounded-4 mt-4'>
            <h1 className='fs-3 fw-bold py-2'>Trending</h1>
            <div className='row'>
                {trending.map((coin) => {
                    return (
                        <div className='col-md-6 col-lg-4'>
                            <div className='rounded-5 shadow-lg my-2 d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                    <img className='rounded-circle' src={coin.item.small} alt='id' />
                                    <div className='px-2'>
                                        <p className='m-0'>{coin.item.name}</p>
                                        <p className='m-0'>{coin.item.symbol}</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: 1.5 +'rem'}}
                                    className='mr-2'
                                    src='https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579' alt='/' />
                                    <p className='m-0 px-2'>{coin.item.price_btc.toFixed(7)}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Trending;
