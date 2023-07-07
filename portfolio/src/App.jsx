import { useState } from 'react'

import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/views/Header';
import Navbar from './components/views/Navbar';
import Footer from './components/views/Footer';
import Body from './components/views/Body';


function App() {

  return (
    <>
      <div className="App">
          <Navbar />
          <Header />
          <Body />
          <Footer />
       </div>
    </>
  )
}

export default App
