import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Components/Forms";
import ShowData from "./Components/ShowData";

class App extends Component {
  state = {
    name: "",
    stand: "",
    stage: "form",
    records: []
  };

  getData = st => {
    var arr = localStorage.getItem("userData") || "[]";

    arr = JSON.parse(arr);

    arr.push({ ...st });

    localStorage.setItem("userData", JSON.stringify(arr));
  };

  getRecords = () => {
    var arr = JSON.parse(localStorage.getItem("userData") || "[]");
    console.log(arr);
    this.setState({ records: arr, stage: "records" });
  };

  changeStage = () => {
    this.setState({ stage: "form" });
  };

  render() {
    return (
      <div className="App">
        {this.state.stage === "form" ? (
          <Forms getData={this.getData} getRecords={this.getRecords} />
        ) : (
          <ShowData
            records={this.state.records}
            changeStage={this.changeStage}
          />
        )}
      </div>
    );
  }
}

export default App;
