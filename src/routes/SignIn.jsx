import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label, Container, InputGroup } from 'reactstrap'

const SignIn = () => {
    return (
        <Container className='h-100 d-flex flex-column justify-content-end align-items-center'>
            <div>
                <h2>Sign In</h2>
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
                        Sign In
                    </Button>
                </Form>
            </div>
            <p className='mt-2'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </Container>
    )
}

export default SignIn
