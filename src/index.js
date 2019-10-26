import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './singup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCHmH28Cz19-MYqhPF1u5C77-7GKQL0BHQ",
    authDomain: "chat-app-fba9d.firebaseapp.com",
    databaseURL: "https://chat-app-fba9d.firebaseio.com",
    projectId: "chat-app-fba9d",
    storageBucket: "chat-app-fba9d.appspot.com",
    messagingSenderId: "708941549692",
    appId: "1:708941549692:web:a21d1e70eae3ca2c1a79f9",
    measurementId: "G-7P7GKG3KT8"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path='/login' component={LoginComponent} ></Route>
      <Route path='/signup' component={SignupComponent} ></Route>
      <Route path='/dashboard' component={DashboardComponent} ></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
