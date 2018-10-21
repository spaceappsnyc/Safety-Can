import React from "react";
import { Link } from 'react-router-dom';

import "./Menu.css";

const Menu = props => {
  return (
    <React.Fragment>
      <div id="panel">
        <ul>
          <li>
            <a href="#">Map</a>
          </li>
          <li>
            <a href="#">Disasters</a>
          </li>
          <li>
            <a href="#">Guides</a>
          </li>
          <li>
            <a href="#">Family</a>
          </li>
          <li>
            <a href="#">Checklist</a>
          </li>
          <li>
            <Link to='/crisis'><a href="#">Crisis</a></Link>
          </li>
        </ul>
      </div>
      <div id="shade" onClick={props.toggler} />
    </React.Fragment>
  );
};

export default Menu;
