import React from 'react';
import {BrowserRouter} from "react-router-dom"

import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter></BrowserRouter>
   <Navbar/>
    </div>
  );
}

export default App;
