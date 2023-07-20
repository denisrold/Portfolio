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
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <>
      <div  style={{ width: '100%', height: '100vh'}}>
          <Navbar ref={{contactRef,aboutRef,projectsRef,homeRef}} />
          <Home ref={homeRef} />
          <TechStack/>
          <About ref={aboutRef}/>
          <Proyects ref={projectsRef}/>
          <ContactMe ref={contactRef} />
          <Footer />
       </div>
    </>
  )
}

export default App
