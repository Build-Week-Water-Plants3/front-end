/***************
 LIBRARIES
 ***************/
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import './App.css';

/***************
 COMPONENTS
 ***************/
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/Register";
import NavBar from "./components/NavBar";
import PlantForm from './components/PlantForm';
import PlantsDisplay from "./components/PlantsDisplay";
import Logout from "./components/Logout";


/***************
 MAIN COMPONENT
 ***************/
function App() {

    /***************
     HOOKS
     ***************/
    const [currentUser, setCurrentUser] = useState({
        "username": "",
        "password": "",
        id: null
    });


    /***************
     EVENT HANDLERS
     ***************/
    const handleUserChange = (event) => {
        setCurrentUser({
            ...currentUser,
            [event.target.name]: event.target.value
        });
    };

    /***************
     DISPLAY & ROUTING
     ***************/
    return (
        <Router>
            <div className="App container-fluid">
                <div className="d-flex justify-content-center">
                    <h1>Water My Plants</h1>
                </div>
                <NavBar/>
                <Switch>
                    <Route exact path="/register" component={RegisterForm}/>
               {/* <PrivateRoute exact path="/protected" component={PlantForm}/>*/}
                    <Route exact path="/login">
                        <Login currentUser={currentUser} handleUserChange={handleUserChange}
                               setCurrentUser={setCurrentUser}/>
                    </Route>
                    <Route exact path="/plantsdisplay">
                        <PlantsDisplay currentUser={currentUser}/>
                    </Route>
                    <PrivateRoute exact path="/protected">
                        <PlantForm currentUser={currentUser}/>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );

}


export default App;
