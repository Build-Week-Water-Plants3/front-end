import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/Register";
import NavBar from "./components/NavBar";
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import PlantForm from './components/PlantForm';

function App() {

    const [currentUser, setCurrentUser] = useState({
        "username": "",
        "password": "",
        id: null
    });

    const handleUserChange = (event) => {
        setCurrentUser({
            ...currentUser,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Router>
            <div className="App container-fluid">
                <div className="d-flex justify-content-center">
                    <h1>Water My Plants</h1>
                </div>
                <NavBar/>
                <Switch>
                    <Route exact path="/register" component={RegisterForm}/>
                    <PrivateRoute exact path="/protected" component={PlantForm}/>
                    <Route exact path="/login">
                        <Login currentUser={currentUser} handleUserChange={handleUserChange}
                               setCurrentUser={setCurrentUser}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
