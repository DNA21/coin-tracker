import React from 'react';
import { Container } from 'reactstrap';
import SavedCoin from '../components/SavedCoin';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <Container className='bgSecondary rounded-4 mt-4 d-flex justify-content-between align-items-center'>
                <div>
                    <h1>Account</h1>
                    <div>
                        <p>Welcome, {user?.email}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleSignOut} className='bgButtonSecondary text-link px-4 py-2 rounded-5 text-center shadow-lg'>Sign Out</button>
                </div>
            </Container>
            <Container className='bgSecondary rounded-4 mt-4'>
                <div>
                    <h1>Watch List</h1>
                    <SavedCoin />
                </div>
            </Container>
        </>
    )
}

export default Account
