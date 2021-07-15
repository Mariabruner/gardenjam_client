import React, { Component, useEffect, useState } from 'react'
import Sitebar from './components/Navbar';
import Auth from './auth/Auth';
import HomePage from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Footer from './components/Footer'
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'))
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <HomePage token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return(
<<<<<<< HEAD
    <div className='App'>
      <Router>
      </Router>
      develop
      <Footer />
    </div>
  );
};
=======
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}
>>>>>>> 775b95586f47d5361df23230bbcb0d2215315b0b

export default App;
