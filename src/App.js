import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main'
import Home from './components/Home'
import 'bulma'
import HomeReport from "./components/HomeReport";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/report" component={HomeReport} />
      </div>
    </Router>
  );
}

export default App;
