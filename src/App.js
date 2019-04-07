import React, { Component } from 'react';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import ColorComponent from "./components/ColorComponent";

class App extends Component {

  render() {
    return (
        <div>
          <ButtonComponent/>
          <ColorComponent/>
        </div>

    );
  }
}

export default App;
