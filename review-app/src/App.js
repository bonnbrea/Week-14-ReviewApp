
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ReviewPage from './components/ReviewPage';
import ContactUs from './components/Contactus';


function App() {
  let component 
  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break
    case "/reviewpage":
     component = <ReviewPage />
     break
    case "/contactus":
      component = <ContactUs />
      break
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  )
}
export default App; 





