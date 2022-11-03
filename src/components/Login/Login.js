import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../constexts/UserContext';
import './Login.css'

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const handleSignUp =event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    signIn(email,password)
    .then(result=>{
      const user =result.user;
      console.log(user);
      form.reset();
      navigate(from,{replace:true})
      
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <div className='form-container'>
      <h2 className='form-title'>This is login</h2>
      <form onSubmit={handleSignUp}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
         <input type="email" name="email" id="" required />

        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
         <input type="password" name="password" id="" required />
         <input className='btn-submit' type="submit" value="Sign Up" />

        </div>
      </form>
      <p>New To ema John?<Link to='/signup'>Create a New Account</Link></p>
      
    </div>
  );
};

export default Login;
<h4>This is login</h4>