import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label, Container } from 'reactstrap'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signUp} = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email,password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div>
                <h2>Sign Up</h2>
                {error ? <p className='text-danger'></p> : null}
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
                        Sign Up
                    </Button>
                </Form>
            </div>
            <p className='mt-2'>Already have an account? <Link to='/signin'>Sign in</Link></p>
        </Container>
    )
}

export default SignUp
