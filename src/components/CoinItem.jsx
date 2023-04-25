import React, { useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {BsStar, BsStarFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const CoinItem = ({coin}) => {
    const [savedCoin, setSavedCoin] = useState(false);
    const { user } = UserAuth();

    const coinPath = doc(db, 'user', `${user?.email}`);
    const saveCoin = async () => {
        if (user?.email) {
            setSavedCoin(true);
            await updateDoc(coinPath, {
                watchList: arrayUnion({
                    id: coin.id,
                    name: coin.name,
                    image: coin.image,
                    rank: coin.market_cap_rank,
                    symbol: coin.symbol,
                }),
            });
        } else {
            alert('Please sign in to save a coin to your watch list');
        }
    };

    return (
        <tr className='overflow-hidden border-bottom table' style={{height: 80 + 'px'}}>
            <td onClick={saveCoin} className='align-middle'>{savedCoin ? <BsStarFill /> : <BsStar />}</td>
            <td className='align-middle'>{coin.market_cap_rank}</td>
            <td className='align-middle'>
                <Link className='text-link' to={`/coin/${coin.id}`}>
                    <div className='d-flex align-items-center'>
                        <img
                            style={{width: 1.5 + 'rem'}}
                            className='p-0'
                            src={coin.image}
                            alt={coin.id} />
                        <span className='d-none d-sm-block px-2'>{coin.name}</span>
                    </div>
                </Link>
            </td>
            <td className='align-middle'>{coin.symbol.toUpperCase()}</td>
            <td className='align-middle'>${coin.current_price.toLocaleString()}</td>
            <td className={`${(coin.price_change_percentage_24h >= 0) ? 'positive-percentage' : 'negative-percentage'} align-middle`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className='d-none d-md-table-cell align-middle'>${coin.total_volume.toLocaleString()}</td>
            <td className='d-none d-sm-table-cell align-middle'>${coin.market_cap.toLocaleString()}</td>
            <td className='align-middle'>
                <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine color={(coin.sparkline_in_7d.price[0] < coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]) ? 'limegreen' : 'red'} />
                </Sparklines>
            </td>
        </tr>
    );
};

export default CoinItem;
