import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <Facerecognition /> */}
      </div>
    );
  }
}

export default App;
