import React from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cari' element={<Homepage />} />
          <Route path='/jelajah' element={<Homepage />} />
          <Route path='/rekomendasi' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
