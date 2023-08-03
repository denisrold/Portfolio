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
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';




function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const dispatch = useDispatch();
  //darkMode
  const darkMode = useSelector(state => state.darkModeReducer.darkMode);

  //LocalStorage && darkMode:
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null && savedDarkMode !== darkMode) {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: savedDarkMode });
    }
  }, []);
  // Agregar o eliminar la clase 'dark-mode' del elemento raíz según el estado del modo oscuro
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }, [darkMode]);
  //Fin del modo oscuro
  return (
  <>
    <div style={{ width: '100%', height: '100vh'}}>
      <Routes>
        <Route path="/"element={
          <>
            <Navbar ref={{contactRef,aboutRef,projectsRef,homeRef}} />
            <Home ref={homeRef} />
            <TechStack/>
            <About ref={aboutRef}/>
            <Proyects ref={projectsRef}/>
            <ContactMe ref={{contactRef, homeRef}}/>
            <Footer />
          </>
        }/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<ProjectsDetails/>}/>
      </Routes>
    </div>
  </>
  )
}

export default App
