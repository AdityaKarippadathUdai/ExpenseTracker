import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {Link, useNavigate} from 'react-router-dom';
import { Input } from '../../components/Inputs/Input';


export const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);

  const navigate=useNavigate();

  const handleLogin=async (e)=>{

  }



  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black'>Welcome</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please Enter Details </p>

      <form onSubmit={handleLogin}>
        <Input 
        value={email}
        onChange={({target})=>setEmail(target.value)}
        label="Email Address"
        placeholder="name@gmail.com"
        type="text"/>
        <Input 
        value={password}
        onChange={({target})=>setPassword(target.value)}
        label="Password"
        placeholder="Min 8 character"
        type="password"/>


        {error && <p className=''>{error}</p>}
        <button type='submit' className=''>
          Login
        </button>
        <p className=''>
          Dont't have an Account?{""}
          <Link className='' to="/signup">
          SignUp
          </Link>
        </p>
      </form>
      </div>
    </AuthLayout>
  )
}
export default Login
