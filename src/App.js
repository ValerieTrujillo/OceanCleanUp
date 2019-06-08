import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/navigation/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          {/* <img src="https://image.shutterstock.com/image-vector/cute-purple-fur-seal-sea-260nw-622514777.jpg" className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
