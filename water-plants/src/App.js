import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/Register";
import NavBar from "./components/NavBar";
import logo from './logo.svg';
import './App.css';
import React from 'react'
import PlantForm from './components/PlantForm';

function App() {
  return (
<Router>
      <div className="App container-fluid">
        <div className="d-flex justify-content-center">
        <h1>Water My Plants</h1>
        </div>
        <NavBar/>
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
