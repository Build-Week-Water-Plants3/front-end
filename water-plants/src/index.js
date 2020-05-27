import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { Provider } from 'react-redux';
import axios from "axios";


axios.post('https://water-my-plants3.herokuapp.com/api/auth/login')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(`error`)
  })


const store = createStore(reducer, applyMiddleware(thunk)); 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));