import React, { Component, useEffect, useState } from 'react'
import Sitebar from './components/Navbar';
import Auth from './auth/Auth';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home'
import ParksApp from './components/apps/ParksApp'


import Footer from './components/Footer'
import {
  BrowserRouter as Router, Redirect, withRouter
} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    window.location.href='/home'
    
  
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} />
  //     : <Auth updateToken={updateToken} />)
  // }

  return (
    <div className='App'>
    <div>
      <Router>
        <Sitebar clickLogout={clearToken} /> 
        
        {/* {protectedViews()} */}
        </Router>
        {/* <Home></Home>
        <ParksApp></ParksApp> */}


      </div>
  
      <Footer />


    </div>
  );
};

export default App;
