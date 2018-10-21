import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Map from "./components/Map";
import RecentAlerts from "./components/RecentAlerts";
import RecentEvents from "./components/RecentEvents";
import Guides from "./components/Guides";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Map />
      <RecentAlerts />
      <RecentEvents />
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
