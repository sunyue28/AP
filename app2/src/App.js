import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Login from './components/index';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            {
              // <Route path="/Home">
            }
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{  // <nav>
  //   <ul>
  //     <li>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/about">About</Link>
  //     </li>
  //     <li>
  //       <Link to="/users">Users</Link>
  //     </li>
  //   </ul>
  // </nav>
}
export default App;
