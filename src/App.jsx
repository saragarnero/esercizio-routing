import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} 
    />
      <Route path='/Contact' element={<Contact/>} 
    />
      <Route path='/About/:id/' element={<About/>} 
    />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
