import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Contact from './Pages/Contact';
import ChartsMaps from './Pages/ChartsMaps';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>        
        <Route path="/"  element={<Contact/>} />
        <Route path="/charts-maps"  element={<ChartsMaps />}/>
      </Routes>
    </div>
  );
}

export default App;
