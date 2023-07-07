import { useState } from 'react'

import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
          <Header />
          <p>Hola Mundo</p>

       </div>
    </>
  )
}

export default App
