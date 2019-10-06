import React, { Component } from "react";

class Froms extends Component {
  state = {
    name: "",
    fName: "",
    contact: "",
    age: ""
  };

  nameHandleChange = e => {
    this.setState({ name: e.target.value });
  };
  fNameHandleChange = e => {
    this.setState({ fName: e.target.value });
  };

  contactHandleChange = e => {
    this.setState({ contact: e.target.value });
  };

  ageHandleChange = e => {
    this.setState({ age: e.target.value });
  };

  getData = () => {
    console.log(this.state);
    this.props.getData(this.state);
    this.setState({ name: "", fName: "", contact: "", age: "" });
  };

  getRecords = () => {
    console.log(this.state);
    this.setState({ showRecord: true });
    this.props.getRecords();
  };

  render() {
    return (
      <div>
        <div style={this.state.styles}>
          <h1>Registration Form</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <label>
              <h3>Name:</h3>
            </label>
            <input
              type="text"
              style={{ width: "300px", margin: "auto" }}
              value={this.state.name}
              onChange={this.nameHandleChange}
              className="form-control"
              placeholder="Enter Name"
            />
            <br />

            <div className="form-group">
              <label>
                <h3>Father Name:</h3>
              </label>
              <input
                type="text"
                style={{ width: "300px", margin: "auto" }}
                value={this.state.fName}
                onChange={this.fNameHandleChange}
                className="form-control"
                placeholder="Enter Father Name"
              />
            </div>
            <br />
            <div className="form-group">
              <label>
                <h3>Contact #:</h3>
              </label>
              <input
                type="text"
                style={{ width: "300px", margin: "auto" }}
                value={this.state.contact}
                onChange={this.contactHandleChange}
                className="form-control"
                placeholder="Contact Details"
              />
            </div>
            <br />
            <div className="form-group">
              <label>
                <h3>Age:</h3>
              </label>
              <input
                type="text"
                style={{ width: "300px", margin: "auto" }}
                value={this.state.age}
                onChange={this.ageHandleChange}
                className="form-control"
                placeholder="Enter Age"
              />
            </div>
            <br />
            <button
              className="btn btn-success"
              style={{ margin: "10px" }}
              onClick={this.getData}
            >
              Submit
            </button>
            <button
              className="btn btn-warning"
              style={{ margin: "10px 0px" }}
              onClick={this.getRecords}
            >
              Get Records
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Froms;
