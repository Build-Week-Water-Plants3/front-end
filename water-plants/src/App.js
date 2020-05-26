
import React from "react";
import Plants from './components/Plants'
import { BrowserRouter as  Route}  from "react-router-dom";


function App() {

return(
    <div className="App">
   <Route path="/plants" component={Plants}>
    <Plants></Plants>
  </Route>
    </div>
)
  }


export default App;
