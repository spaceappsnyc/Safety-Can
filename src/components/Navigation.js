import React, { Component } from "react";
import {
  Glyphicon,
  DropdownButton,
  ButtonToolbar,
  MenuItem,
  Modal
} from "react-bootstrap";

import Menu from "./Menu/Menu";
import CreateNewMember from "./CreateNewMember";
import CreateEmergencyContact from "./CreateEmergencyContact";
import "./Navigation.css";

class Navigation extends Component {
  state = {
    showMenu: false,
    showCreateMemberModal: false,
    showCreateContactModal: false
  };

  handleToggleMenu = () => {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  handleCreateMemberModal = () => {
    this.setState(prevState => {
      return { showCreateMemberModal: !prevState.showCreateMemberModal };
    });
  };

  handleHideCreateMemberModal = () => {};

  handleCreateContactModal = () => {
    this.setState(prevState => {
      return { showCreateContactModal: !prevState.showCreateContactModal };
    });
  };

  handleHideCreateContactModal = () => {};

  render() {
    return (
      <React.Fragment>
        <div id="navbar">
          <a onClick={this.handleToggleMenu}>
            <i className="fas fa-bars" />
          </a>
          <a id="brand" href="#">
            SafetyCan
          </a>
          <ButtonToolbar>
            <DropdownButton
              title={<i className="fas fa-user" />}
              noCaret
              id="dropdown-no-caret"
              pullRight
              id="split-button-pull-right"
            >
              <MenuItem
                class="menu-item"
                onClick={this.handleCreateMemberModal}
              >
                Create New Member
              </MenuItem>
              <MenuItem
                class="menu-item"
                onClick={this.handleCreateContactModal}
              >
                Create Emergency Contact
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
        {this.state.showMenu ? <Menu toggler={this.handleToggleMenu} /> : null}
        <Modal
          show={this.state.showCreateMemberModal}
          onHide={this.handleCreateMemberModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateNewMember />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showCreateContactModal}
          onHide={this.handleCreateContactModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Emergency Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateEmergencyContact />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Navigation;
