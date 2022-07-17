import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
import LoginPage from "./Login/Login"

import ComingSoon from "./ComingSoon/ComingSoon"

import SignUpPage from "./Login/SignUp";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/Log In" exact component={ComingSoon} />
      <Route path="/Sign Up" exact component={ComingSoon} />
      <Route path="/Contact us" exact component={ComingSoon} />
      <Route path="/About us" exact component={ComingSoon} />
      <Redirect path="*" to="" />
    </Switch>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
