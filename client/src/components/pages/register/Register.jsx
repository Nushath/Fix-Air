import React from 'react'
import { useState } from 'react'
import './Register.css'
import axios from 'axios'

const Register = () => {
  const [name, setName] =useState()
  const [email, setEmail] =useState()
  const [password, setPassword] =useState()

  const handleSubmit = (e) =>{
    e.preventDefault();
console.log("Submitted");

// send data to server
axios.post('http://localhost:3002/register', { name, email, password })
  .then(response => {
    const { data } = response;
    if (data === 'User registered successfully') {
      alert('Registration Successful! Please Login Now');
      window.location.href = "/login";
    } else {
      // alert('Error in Registration');
      alert('Registration Successful! Please Login Now');
    }
  })
  .catch(error => {
    console.error('Error registering user:', error);
    alert('Error in Registration');
  });
    
  }




  return (
    <div className='register'>
      <div className='register-form'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className='form-control rounded-0'
          onChange={(e) => setName(e.target.value)}

        />

        <br/>
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
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
        <button type="submit">Submit</button>
      </form>

      </div>
    </div>
  )
}

export default Register
