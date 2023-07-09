import { useState } from 'react'

import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/views/Navbar';
import Footer from './components/views/Footer';
import Home from './components/views/Home';


function App() {

  return (
    <>
      <div className="App">
          <Navbar />
          <Home />
          <Footer />
       </div>
    </>
  )
}

export default App
