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
import {Skills} from "../src/views/Skills";
import { ProjectsDetails } from "../src/views/ProjectsDetails";
import React, { useState } from 'react';




function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  //Ruta segura
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  
  return (
  <>
    <div style={{ width: '100%', height: '100vh'}}>
      <Routes>
        <Route exact path="/"element={
          <>
            <Navbar ref={{contactRef,aboutRef,projectsRef,homeRef}} />
            <Home ref={homeRef} />
            <TechStack/>
            <About ref={aboutRef}/>
            <Proyects setButtonClicked={setButtonClicked} ref={projectsRef}/>
            <ContactMe ref={{contactRef, homeRef}}/>
            <Footer />
          </>
        }/>
        <Route path='/skills' element={<Skills/>}/>
        <Route exact path='/projects' element={<ProjectsDetails buttonClicked={buttonClicked}/>}/>
      </Routes>
    </div>
  </>
  )
}

export default App
