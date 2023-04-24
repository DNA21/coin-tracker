import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

const SavedCoin = () => {
    const [coins, setCoins] = useState([]);

    return (
        <div>
            {coins.length === 0
            ? (<p>You don't have any saved coins.  Please save a coin to add it to your watch list. <Link to='/'>Click here to search for coins</Link></p>)
            : (
                <table>
                    <thead>
                        <tr>
                            <th>Rank #</th>
                            <th>Coin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => {
                            <tr key={coin.id}>
                                <td>{coin?.rank}</td>
                                <td>
                                    <Link to={`/coin/${coin.id}`}>
                                        <div>
                                            <img src={coin?.image} alt='/' />
                                            <div>
                                                <p>{coin?.name}</p>
                                                <p>{coin?.symbol.toUpperCase()}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <AiOutlineClose />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SavedCoin;
