import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import ReactDOM from "react-dom";

import dMap from '../assets/images/map.png'

const Map = () => {
  return (
    <img src={dMap} alt='Map' style={{ width: '100%', height: 'auto', marginTop: '100px'}} />
  );
};

export default Map;
