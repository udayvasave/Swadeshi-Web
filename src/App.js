import logo from './logo.svg';
import './App.css';
// import ElevatedButton from './Components/ElevatedButton';
// import Landing from './Components/Landing';
// import InputField from './Components/InputField';
import React, { useState } from 'react';
// import testBtn from './Components/testBtn';
// import ButtonOne from './Components/ButtonOne';
import Page from './Components/Page';
// import Button from './Components/Button';
import Title from './Components/Title';
import SuccessAnimation from './Components/SuccessAnimation';


function App() {

  return (
   
        <div className="App">
        <div className='title'><Title /></div> 
         <div className="button">
         <Page />
         </div>
          
        {/* <div> <SuccessAnimation /></div> */}

        </div>
   
  );
}

export default App;
