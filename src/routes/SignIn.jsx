import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Container } from 'reactstrap';
import {signIn, UserAuth} from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email,password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div>
                <h2>Sign In</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for='email'>
                            Email
                        </Label>
                        <Input onChange={(e) => setEmail(e.target.value)} id='email' name='email' type='email' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>
                            Password
                        </Label>
                        <Input onChange={(e) => setPassword(e.target.value)} id='password' name='password' type='password' />
                    </FormGroup>
                    <Button className='bgButton w-100'>
                        Sign In
                    </Button>
                </Form>
            </div>
            <p className='mt-2'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </Container>
    )
}

export default SignIn
