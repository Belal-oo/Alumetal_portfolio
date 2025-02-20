import './App.css';
import { useState } from 'react';
import OurServices from './our services/ourServices';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <OurServices />
    </div>
  );
}

export default App;
