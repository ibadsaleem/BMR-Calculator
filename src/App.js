import logo from "./logo.svg";
import "./App.css";
import BMR from "./components/bmr";
import Home from "./components/HomePage";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="main">
          <Home />
          </div>
      </div>
    );
  }
}

export default App;
