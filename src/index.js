import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Map from "./components/Map";
import RecentAlerts from "./components/RecentAlerts";
import RecentEvents from "./components/RecentEvents";
import Guides from "./components/Guides";
import Crisis from './components/Crisis/Crisis';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' render={() => (
        <React.Fragment>
          <Map />
          <RecentAlerts />
          <RecentEvents />
        </React.Fragment>
      )} />
      <Route path='/crisis' component={Crisis} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
