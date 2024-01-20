import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {

  const [email, setEmail] =useState()
  const [password, setPassword] =useState()

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      console.log("Submitted")
      localStorage.setItem('userLoggedIn', "true");
      localStorage.setItem('email', email);
      alert("User Logged In Successfully!");
      navigate('/')
      }else{
        alert("Please fill out all fields.")
        }
  }

  return (
    <div className='login'>
      <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <h1 className='head1-login'>Login</h1>
        <h3 className='head3-login'>Welcome Back!</h3>
        <br />
        <label htmlFor="email">Email Address</label>
        <input 
          type="text" 
          id="email" 
          name="email"
          className='form-control rounded-0'
          onChange={(e) => setEmail(e.target.value)}  
        />
        <br/>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className='form-control rounded-0'
          onChange={(e) => setPassword(e.target.value)}  
        />
        <br/>
        <div className='loginButton'>
        <button type="submit">
          Log In
        </button>
      </div>
      </form>
      <hr />
      <div className='registerButton'>
        <Link to='/register' type="submit">
          Don't have an Account yet? Register Now!
        </Link>
      </div>
      </div>
    </div>

  )
}

export default Login
