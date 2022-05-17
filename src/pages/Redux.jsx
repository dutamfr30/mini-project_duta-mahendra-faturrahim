import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import Login from './Login';
import Home from './index';

export default function Redux() {
    const user = useSelector(selectUser);
  return (
    <div className='loginBody'>
      {user ? <Home /> : <Login />}
    </div>    
  )
}
