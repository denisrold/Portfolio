import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Home from './views/Home';
import TechStack from'./views/TechStack';
import About from './views/About';
import Proyects from './views/Proyects';
import ContactMe  from './views/Contact';
import { useRef } from 'react';



function App() {
  const ref = useRef(null);
  return (
    <>
      <div  style={{ width: '100%', height: '100vh',marginTop:'100px' }}>
          <Navbar ref={ref} />
          <Home />
          <TechStack/>
          <About />
          <Proyects />
          <ContactMe ref={ref} />
          <Footer />
       </div>
    </>
  )
}

export default App
