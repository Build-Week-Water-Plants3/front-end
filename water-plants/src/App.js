
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/Register"
import logo from './logo.svg';
import './App.css';
import PlantForm from './components/PlantForm';

function App() {
  return (
<Router>
      <div className="App">
        <div className="d-flex justify-content-center">
        <h1>Water My Plants</h1>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/register">Register</Link>
            </li>
            <li className="list-group-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Route exact path="/register" component={RegisterForm} />
        <Switch>
          <PrivateRoute exact path="/protected" component={PlantForm} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
