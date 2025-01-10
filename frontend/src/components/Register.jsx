import React, { useState } from 'react';
import { FaArrowLeft, FaGoogle } from 'react-icons/fa';
import { GoogleLogin } from 'react-google-login';
import login from './login.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert'
export default function Register() {
  const navigate = useNavigate();
const alert =useAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/v1/register', {
        email,
        password,
      });
      console.log(data);
      if (data =='Successfully register') {
        localStorage.setItem('login',true);
        alert.success('Successfully register')
      navigate('/portal');
      } else {
        alert.error('Something Goes wrong')
      
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const onSuccess = async (res) => {
    localStorage.setItem('login',true);
    alert.success('Successfully register')
     navigate('/portal');
    };

  const onFailure = () => {
    alert.error('Something Goes wrong')
  };

  return (
    <div className="h-screen">
      <div className="flex items-center m-10">
        <FaArrowLeft className="m-2" />
        <Link to="/">
          <HomeIcon color="primary" fontSize="large" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 rounded-xl border-black h-100 w-80">
          <h1 className="font-semibold text-center text-2xl p-5">
            Let's get started
          </h1>
          <h2 className="font-semibold text-center text-1xl p-5">
            Register With Google
          </h2>
          <div className="rounded-full mx-12 my-3 w-52 text-center btn">
          {/* // add clientId here */}
            <GoogleLogin
              clientId=""
              buttonText="Register"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
             
            />
          </div>
          <div className="px-12 flex justify-center items-center">
            <h1 className="py-2">------------or------------</h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="px-12">
              <h2 className="py-2">Work Email</h2>
              <input
                className="p-1 border rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="px-12">
              <h2 className="py-2">Password</h2>
              <input
                className="p-1 border rounded-md"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="p-4 text-center">
              <Button type="submit" variant="contained">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
