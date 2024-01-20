import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png';


// Scroll Behavior 
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  

   
const Navbar = () => {
    
// Homepage component that displays the search bar and tabs for different categories of destinations
 const [searchTerm, setSearchTerm] = useState('');
  
 const handleChange = (event) => {
    setSearchTerm(event.target.value);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchTerm}`);
 };

  return (
    <navbar>
        {/* NAVBAR */}
     <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} width={175} height={155} alt='Fixs Air'/>
        </div>
        <ul className='nav-list'>
          <Link to="#booking" className='nav-lists' onClick={() => scrollToSection('booking')}>Book</Link>
          <Link to="#explore" className='nav-lists' onClick={() => scrollToSection('explore')}>Explore</Link>
          <Link to="#promotion & deals" className='nav-lists' onClick={() => scrollToSection('promotion & deals')}>Promotion & Deals</Link>
          <form className='search' onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
              <i className="bi bi-search"></i>
            </form>
          <Link to='/login' className='nav-lists'>Login</Link>
        </ul> 
    </div>
    </navbar>
  )
}

export default Navbar
