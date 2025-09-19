import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import About from './pages/About';
import Exercise from './pages/Exercise'
import Quiz from './pages/Quiz';
import SearchPages from "./pages/SearchPages";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} 
    />
      <Route path='/Contact' element={<Contact/>} />
            <Route path='/esercizi' element={<Exercise/>} 

    />
      <Route path='/About/:id/' element={<About/>} 
    />

    <Route path='/Quiz' element={<Quiz/>} 
    />
    <Route path='/cerca' element={<SearchPages/>} 
    />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
