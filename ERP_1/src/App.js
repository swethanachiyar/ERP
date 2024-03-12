import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Ordermanagement from './pages/Ordermanagement';
import Productmanagement from './pages/Productmanagement';
import Ordercalview from './pages/Ordercalview';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Ordermanagement" element={<Ordermanagement/>} />
        <Route path="/Productmanagement" element={<Productmanagement/>} />
        <Route path="/Ordercalview" element={<Ordercalview/>} />
       
        
      </Routes>
    </Router>
  );
}

export default App;

