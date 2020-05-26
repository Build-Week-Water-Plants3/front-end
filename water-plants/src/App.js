import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/Register"
//import ProtectedPage from "./components/ProtectedPage";


function App() {
  return (
<Router>
      <div className="App">
        <div className="d-flex justify-content-center">
        <h1>Water My Plants</h1>
        </div>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/protected">Protected Page</Link>
          </li> */}
        </ul>
        <Route exact path="/register" component={RegisterForm} />
        <Switch>
          {/* <PrivateRoute exact path="/protected" component={ProtectedPage} /> */}
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
