import React /*{useEffect, useState }*/ from 'react';
import LandingPage from './landing-page/LandingPage';


function App ( ){
  // eslint-disable-next-line
  // const [backendData,setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then (
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, []) // so it only runs on the first load of component
  return (
    <div>
      <LandingPage></LandingPage>
    </div>
  )
}; 


export default App;