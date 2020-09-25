import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
	const [signOutUser, setSignOutUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={([loggedInUser, setLoggedInUser], [signOutUser, setSignOutUser])}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/booking/:id">
              <Booking/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/search">
              <Search/>
            </PrivateRoute>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
