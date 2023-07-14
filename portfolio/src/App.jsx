import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Home from './views/Home';
import TechStack from'./views/TechStack';
import About from './views/About';
import Proyects from './views/Proyects';

function App() {

  return (
    <>
      <div className="App" style={{ width: '100%', height: '100vh',marginTop:'100px' }}>
          <Navbar />
          <Home />
          <TechStack/>
          <About />
          <Proyects />
          <Footer />
       </div>
    </>
  )
}

export default App
