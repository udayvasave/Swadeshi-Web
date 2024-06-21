import logo from './logo.svg';
import './App.css';
// import ElevatedButton from './Components/ElevatedButton';
// import Landing from './Components/Landing';
// import InputField from './Components/InputField';
import React, { useState } from 'react';
// import testBtn from './Components/testBtn';
// import ButtonOne from './Components/ButtonOne';
import Page from './Components/Page';


function App() {

const [isInputOpen, setIsInputOpen] =useState(false);

const handleRequestAccess= ()=>{
setIsInputOpen(true);
}

const handleCloseInput= ()=>{
  setIsInputOpen(false);
}

const handleClick = () => {
  alert('Button Clicked!');
};
  return (
   
        <div className="App">
          <Page />          
        </div>
   
  );
}

export default App;
