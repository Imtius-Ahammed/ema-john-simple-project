import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../constexts/UserContext';

import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
 
  return (
    <nav className='header-nav'>
     <img src={logo} alt="" />
     <div>
      <Link to="/">Home</Link>
      <Link to="/">Shop</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/about">About</Link>
      {
        user?.uid?
        <button className='btn-logout' onClick={logOut}>LogOut</button>:
        <>
        <Link to="/login">Log In</Link>
      <Link to="/signup">SignUp</Link>
        </>
        }
      <span>{user?.email}</span>
     </div>
      
    </nav>
  );
};

export default Header;
<h2>This is Header</h2>