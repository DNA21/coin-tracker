import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label, Container, InputGroup } from 'reactstrap'

const SignUp = () => {
    return (
        <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div>
                <h2>Sign Up</h2>
                <Form>
                    <FormGroup>
                        <Label for='email'>
                            Email
                        </Label>
                        <InputGroup>
                            <Input id='email' name='email' type='email' />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>
                            Password
                        </Label>
                        <Input id='password' name='password' type='password' />
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
