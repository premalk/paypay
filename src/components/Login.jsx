import React from 'react';
import {getCall} from '../API/apiCall.js';

const Login = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    getCall('employees').then((res)=>{
      console.log(res);
    });
  }
  return (
    <div className="login">
      <input
        type="text"
        placeholder="Username"
        id="username"
        className='inputBox' 
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        className='inputBox'
      />  
      <input
        type="submit"
        value="Login"
        className='loginButton'
        onClick = {(e)=>{handleOnClick(e)}}
      />
    </div>
  )
};
export default Login;
