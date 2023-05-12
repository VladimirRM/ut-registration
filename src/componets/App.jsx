
import './App.css';
import NavBar from './NavBar/NavBar';
import './App.less'
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <div className="app">
         <NavBar/>
         <Switch>
        <Route path='/registration' component={Registration}/>
         </Switch>
   </div>
    </BrowserRouter>

  );
}

export default App;
