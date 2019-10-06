import React, { Component } from "react";

class ShowData extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Saved Records</h1>
        {console.log(this.props.records)}

        {this.props.records.map(record => {
          return (
            <li key={Math.random() * 10} style={{ listStyleType: "none" }}>
              Name: <b>{record.name}</b>
              <br />
              Father Name: <b>{record.fName}</b>
              <br />
              Contact Details: <b>{record.contact}</b>
              <br />
              Age: <b>{record.age}</b>
              <hr />
            </li>
          );
        })}
        <button className="btn btn-primary" onClick={this.props.changeStage}>
          Back
        </button>
      </div>
    );
  }
}

export default ShowData;
