import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import PlantsDisplay from './components/PlantsDisplay';
import PlantForm from './components/PlantForm';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plantform">Add a New Plant</Link>
                </li>
                <li>
                    <Link to="/plantsdisplay">Display Your Current Plants</Link>
                </li>
            </nav>
            <div className="App">
                <Switch>
                        <Route path="/plantsdisplay">
                            <PlantsDisplay/>
                        </Route>
                        <Route path="/plantform">
                            <PlantForm/>
                        </Route>

                </Switch>
            </div>
        </Router>
    )
}


export default App;
