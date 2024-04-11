import React /*{useEffect, useState }*/ from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './dashboard/Dashboard';
import Health from './components/Health';
import Activities from './components/Activities';
import Goals from './components/Goals';
import Profile from './components/Profile';
import Reminders from './components/Reminders';


function App ( ){
 
  return (
    
    <Router>
      <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/dashboard' Component={Dashboard} /> 
        <Route path='/activities' Component={Activities} /> 
        <Route path='/goals' Component={Goals} /> 
        <Route path='/health' Component={Health} />
        <Route path='/profile' Component={Profile} />
        <Route path='/reminders' Component={Reminders} />
      </Routes>
    </Router>
     
    
  )
}; 


export default App;