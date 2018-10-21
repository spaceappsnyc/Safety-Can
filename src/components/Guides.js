import React, { Component } from "react";
import axios from "axios";

class Guides extends Component {
  componentDidMount() {
    this.fetchGuides();
  }

  fetchGuides = () => {
    const guidesUrl =
      "https://www.ready.gov/feeds/fema-mobile-app-hazard-json-feed/en";
    axios
      .get(guidesUrl)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return <div>Guides</div>;
  }
}

export default Guides;
