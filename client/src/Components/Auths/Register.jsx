import React from 'react'
import '../Styling/Register.css'
import { Button } from '@mui/material'

function Register() {
    return (
        <div className='main'>
            <h1 className="text">Register</h1>
            <form className='form'>
                <div className='innerdiv'>
                    <label>Fitst Name:</label>
                    <input className='form-control' type="text" name='Name' />
                    <br />
                    <label>Last Name:</label>
                    <input className='form-control' type="text" name='UserName' />
                    <br />
                    <label>Phone Number:</label>
                    <input className='form-control' type="password" name='Password' />
                    <br />
                    <label>Email:</label>
                    <input className='form-control' type="email" name='Email' />
                    <br />
                    <label>Password:</label>
                    <input className='form-control' type="password" name='Password' />
                    <br />
                    <Button variant='contained' color="success" >Submit</Button>
                    &nbsp;&nbsp;
                    <Button style={{ color: 'white' }} variant='contained' color="error" href="/login">Login</Button >
                </div>
            </form>
        </div>
    )
}

export default Register