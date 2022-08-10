import { Link } from '@mui/material';
import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
  
  const navigate = useNavigate();
  const [email , setEmail ]= useState('');
  const [password , setPassword ]= useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email , password)
        .then((auth)=>{
          navigate('/')
        })
        .catch(error=> alert(error.message))
  }    
  const register = e =>{
     e.preventDefault();
     auth
        .createUserWithEmailAndPassword(email , password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
              navigate  ('/')
            }
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/home'>
        <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />
        </Link>
        <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail or Phone number</h5>
                    <input type='text' value={email} 
                     onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password}
                     onChange={e=> setPassword(e.target.value)}/>

                    <button className='login__signInButton' type='submit' 
                      onClick={signIn}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Clone 
                Conditions of Use and Privacy Notice.
                </p>

                <button className='login__registerButton' onClick={register}>
                  Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login