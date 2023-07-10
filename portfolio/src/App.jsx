import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Home from './views/Home';
import TechStack from'./views/TechStack';

function App() {

  return (
    <>
      <div className="App">
          <Navbar />
          <Home />
          <TechStack/>
          <Footer />
       </div>
    </>
  )
}

export default App
