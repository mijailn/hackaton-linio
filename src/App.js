import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Home from './components/Home'
import 'bulma'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
