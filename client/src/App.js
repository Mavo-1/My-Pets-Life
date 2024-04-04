import React /*{useEffect, useState }*/ from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './dashboard/Dashboard';

function App ( ){
 
  return (
    
    <Router>
      <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/dashboard' Component={Dashboard} /> 
      </Routes>
    </Router>
     
    
  )
}; 


export default App;