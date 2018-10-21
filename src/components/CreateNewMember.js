import React, { Component } from "react";

class CreateNewMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      age: "",
      hasSpecialNeeds: "",
      conditions: []
    };

    this.createNewMember = this.createNewMember.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSpecNeedsChange = this.handleSpecNeedsChange.bind(this);
    this.handleConditionsChange = this.handleConditionsChange.bind(this);
  }

  createNewMember(name, phoneNumber, email, age, conditions) {
    alert("You've created a new member named: " + name);
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

  handleAgeChange(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleSpecNeedsChange(e) {
    this.setState({
      hasSpecialNeeds: e.target.value
    });
  }

  handleConditionsChange(e) {
    this.setState({
      conditions: e.target.value
    });
  }

  render() {
    return (
      <div id="create-new-member">
        <form>
          <div>
            <label>Name</label>
            <input
              id="name-member"
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              id="phone-number-member"
              type="text"
              onChange={this.handlePhoneNumberChange}
              value={this.state.phoneNumber}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              id="email-member"
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              id="age"
              type="number"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
          </div>
          <div>
            <label>Has Special Needs?</label>
            <input
              type="radio"
              name="special-needs"
              value={this.state.hasSpecialNeeds}
            />Yes
            <input
              type="radio"
              name="special-needs"
              value={this.state.hasSpecialNeeds}
            />No
          </div>
          <div>
            <label>Conditions</label>
            <input
              id="conditions"
              type="text"
              onChange={this.handleConditionsChange}
              value={this.state.conditions}
            />
          </div>
          <div>
            <input
              id="submit-btn-1"
              onClick={() =>
                this.createNewMember(
                  this.state.name,
                  this.state.phoneNumber,
                  this.state.email,
                  this.state.age,
                  this.state.conditions
                )
              }
              type="button"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNewMember;
