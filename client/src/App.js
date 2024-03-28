import React, {useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';

function App ( ){
  const [backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
      data => {
        setBackendData(data)
      }
    )
  }, []) // so it only runs on the first load of component
  return (
    <div>
      <LandingPage />
      
    </div>
  )
}; 


export default App;