import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Switch from 'react-dom'
import Registration from './registration/Registration';

import Navbar from './navbar/Navbar';

function App() {
  return (
    <BrowserRouter>

    <div className="app">
           <Navbar/>
      <Switch>
        <Route path='/registration' component={Registration}/>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
