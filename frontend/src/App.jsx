import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DarkVeil from './components/DarkVeil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
        pointerEvents: 'none'
      }}>
        <DarkVeil 
          hueShift={180}
          noiseIntensity={0.05}
          scanlineIntensity={0}
          speed={0.5}
          warpAmount={0.02}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;