import React from 'react';
import './App.css';
import { Router, Route } from 'react-router'
import MainPage from "./pages/MainPage";
import IllustrationsPage from "./pages/IllustrationsPage";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div id="app">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={MainPage}/>
            <Route path="/illustrations" component={IllustrationsPage}/>
            <Route path="/about" component={AboutPage}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
