import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {db} from '../firebase';
import { UserAuth } from '../context/AuthContext';

const SavedCoin = () => {
    const [coins, setCoins] = useState([]);
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc) => {
            setCoins(doc.data()?.watchList)
        })
    }, [user?.email]);

    const coinPath = doc(db, 'user', `${user?.email}`);
    const deleteCoin = async (deletedCoinId) => {
        try {
            const result = coins.filter((item) => item.id !== deletedCoinId);
            await updateDoc(coinPath, {
                watchList: result
            })
        } catch(err) {
            console.log(err.message)
        }
    }


    return (
        <div>
            {coins.length === 0
            ? (<p>You don't have any saved coins.  Please save a coin to add it to your watch list. <Link to='/'>Click here to search for coins</Link></p>
            ) : (
                <table className='text-center w-100'>
                    <thead>
                        <tr className='border-bottom'>
                            <th>Rank #</th>
                            <th>Coin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins?.map((coin) => {
                            return(
                                <tr key={coin.id} className='overflow-hidden border-bottom table' style={{ height: 80 + 'px' }}>
                                    <td className='align-middle'>{coin?.rank}</td>
                                    <td className='align-middle'>
                                        <Link className='text-link' to={`/coin/${coin.id}`}>
                                            <div className='d-flex justify-content-around'>
                                                <img style={{ width: 3 + 'rem' }} src={coin?.image} alt='/' />
                                                <p className='d-none d-md-block my-auto'>{coin?.name}</p>
                                                <p className='d-block d-md-none my-auto'>{coin?.symbol.toUpperCase()}</p>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className='align-middle'>
                                        <AiOutlineClose onClick={() => deleteCoin(coin.id)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SavedCoin;
