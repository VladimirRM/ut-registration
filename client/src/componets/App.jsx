import React from 'react';
import { Routes, Route, } from "react-router-dom"

import Registration from './registration/Registration';

import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>

        <Route path='/registration' element={<Registration/>} />
        <Route path='/' element={<App/>} />


      </Routes>

    </div>

  );
}

export default App;
