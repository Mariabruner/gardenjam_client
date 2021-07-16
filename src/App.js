import React, { Component, useEffect, useState } from 'react'
import Sitebar from './components/Navbar';
import Auth from './auth/Auth';
import HomePage from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home'

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
    <div className='App'>
      
      <Router>
      </Router>
      develop
      <Footer />
    </div>
  );
};
//     <div>
//       <Sitebar clickLogout={clearToken}/>
//       {protectedViews()}
//     </div>
//   );
// }

export default App;
