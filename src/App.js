import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import CreateQuiz from './components/CreateQuiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/createQuiz' element={<CreateQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
