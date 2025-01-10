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
export default function Login() {
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
      const { data } = await axios.post('/api/v1/login', {
        email,
        password,
      });

      if (data === 'Successfully login') {
        localStorage.setItem('login',true);
        alert.show('Successfully login');
        navigate('/start');
      } else {
        alert.error('Create account');
        navigate('/register');
      }
    } catch (error) {
        alert.error(error);
      console.error('Login failed', error);
    }
  };

  const onSuccess = async (res) => {
    localStorage.setItem('login',true);
     navigate('/start');

  };

  const onFailure = () => {

    navigate('/');
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
            Login With Google
          </h2>
          <div className="rounded-full mx-12 my-3 w-52 text-center btn">
          {/* // add clientId here */}
            <GoogleLogin
              clientId=""
              buttonText="Login"
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
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

