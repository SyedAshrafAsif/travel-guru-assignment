import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import CreateAccount from './components/CreateAccount/CreateAccount';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/createAccount">
            <CreateAccount/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="search">
            <Search/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
