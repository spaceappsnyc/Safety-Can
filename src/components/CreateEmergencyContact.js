import React, { Component } from "react";

class CreateEmergencyContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: ""
    };

    this.createNewContact = this.createNewContact.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  createNewContact(name, phoneNumber, email) {
    alert("You've created a new contact named: " + name);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return (
      <div id="create-emergency-contact">
        <form>
          <div>
            <label for="">Name</label>
            <input
              id="name-contact"
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label for="">Phone Number</label>
            <input
              id="phone-number-contact"
              type="text"
              onChange={this.handlePhoneNumberChange}
              value={this.state.phoneNumber}
            />
          </div>
          <div>
            <label for="">Email</label>
            <input
              id="email-contact"
              type="text"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              id="submit-btn-2"
              type="button"
              onClick={() =>
                this.createNewContact(
                  this.state.name,
                  this.state.phoneNumber,
                  this.state.email
                )
              }
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEmergencyContact;
