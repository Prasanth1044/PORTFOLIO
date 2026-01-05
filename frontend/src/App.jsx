import React from 'react';
import Home from './pages/Home';
import DarkVeil from './components/DarkVeil';
import './styles/main.css';

const App = () => {
  return (
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
      <Home />
    </div>
  );
};

export default App;