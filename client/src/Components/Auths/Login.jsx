import React from 'react'
import '../Styling/Login.css'
import { Button } from '@mui/material'

function Login() {
    return (
        <div className='main1'>
            <h1 className="text1">Login</h1>
            <form className='form1'>
                <div className='innerdiv1'>
                    <label>Email:</label>
                    <input className='form-control' type="email" name='Email' />
                    <br />
                    <label>Password:</label>
                    <input className='form-control' type="password" name='Password' />
                    <br />
                    <Button variant='contained' color="success" >Submit</Button>
                    <br />
                    <br />
                    <a href='/register'>Don't have an account? Register here.</a>
                </div>
            </form>
        </div>
    )
}

export default Login