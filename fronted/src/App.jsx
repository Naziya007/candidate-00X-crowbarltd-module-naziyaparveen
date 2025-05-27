import { useState } from 'react';
import React from 'react';
// import './App.css'
import ContactForm from './ContactForm';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <div style={
    {backgroundColor:"#121212",minHeight:"100vh",paddingTop:"50px"}
   }>
   <h1 style={{color:"#FF5722",
    textAlign:"center",
    fontFamily:"Oswald"
   }}>Contact Us</h1> 
   <ContactForm/>
   </div>
    </>
  )
}

export default App
