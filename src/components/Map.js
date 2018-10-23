import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.724262,
      lng: -73.999673
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD-bm-A2KMsceL_RBMiLU5LRfbzGLnJgyA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <div
            lat={40.724262}
            lng={-73.999673}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
