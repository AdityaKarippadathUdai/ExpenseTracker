import React, { use, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import { ProfilePhotoSelector } from '../../components/Inputs/ProfilePhotoSelector';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!email) {
      setError("Enter email address");
      return;
    }
    if (!fullName) {
      setError("Enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Enter password");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setError("");

    //signup API call
    try{
      const response=await axiosInstance.post(API_PATHS.AUTH.SIGNUP,{
        fullName,
        email,
        password,
      });
      const{token,user}=response.data;

      if(token){
        localStorage.setItem("token",token);
        updateUser(user);
        navigate("/dashboard");
      }
    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("An error occurred. Please try again.");
      }
    }
    
  };

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>

        <h3 className='text-xl font-semibold text-black'>
          Create Account
        </h3>

        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Enter your details below
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector
            image={profilePic}
            setImage={setProfilePic}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Your Name"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="Your Email"
              type="email"
            />

            <div className='col-span-2'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 character"
                type="password"
              />
            </div>

          </div>

          {error && (
            <p className='text-red-500 text-xs pb-2.5'>
              {error}
            </p>
          )}

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition'
          >
            SignUp
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Have an account{" "}
            <Link
              className='font-medium text-primary underline'
              to="/login"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp