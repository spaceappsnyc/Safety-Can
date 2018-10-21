import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import ReactDOM from "react-dom";

class SearchBox extends Component {
  render() {
    return <input ref="input" {...this.props} type="text" />;
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  };
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener("places_changed", this.onPlacesChanged);
  }
  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}

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
      <div id="map-section">
        <div id="location-bar">
          <SearchBox
            placeholder={"123 anywhere st."}
            onPlacesChanged={this.handleSearch}
          />
          <div>
            <i className="fas fa-search" />
          </div>
        </div>
        <div id="map-content" style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD-bm-A2KMsceL_RBMiLU5LRfbzGLnJgyA"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <div lat={266} lng={30.337844} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
