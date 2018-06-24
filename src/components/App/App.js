import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/Intro";
import Series from "../../containers/Series/Series";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message="Khoateamer" />
        <Series />
      </div>
    );
  }
}

export default App;
