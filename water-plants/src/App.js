/***************
 LIBRARIES
 ***************/
import { BrowserRouter as Router, Route,} from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

/***************
 COMPONENTS
 ***************/
import Login from "./components/Login";
import RegisterForm from "./components/Register";
import NavBar from "./components/NavBar";
import PlantForm from "./components/PlantForm";
import PlantsDisplay from "./components/PlantsDisplay";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import UpdateButton from "./components/UpdateButton"



/***************
 MAIN COMPONENT
 ***************/
function App() {
  /***************
     HOOKS
     ***************/
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
    id: null
  });

  /***************
     EVENT HANDLERS
     ***************/
  const handleUserChange = event => {
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
      <div className="App container-fluid p-5 mt-1">
        <div className="d-flex justify-content-center">
          <h1 className="m-5">Water My Plants</h1>
        </div>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={Login}>
          <Route exact path="/login" component={Login}></Route>
          <Login
            currentUser={currentUser}
            handleUserChange={handleUserChange}
            setCurrentUser={setCurrentUser}
          />
        </Route>
      {/* <Route exact path="/plantsupdate" component={UpdateButton}/>
     */}
        <PrivateRoute exact path="/plantsform">
          <Logout setCurrentUser={setCurrentUser} />
        </PrivateRoute>
        <PrivateRoute exact path="/plantsform">
          <PlantsDisplay currentUser={currentUser} />
        </PrivateRoute>
        <PrivateRoute exact path="/plantsform">
          <PlantForm currentUser={currentUser} />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
