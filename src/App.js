import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
