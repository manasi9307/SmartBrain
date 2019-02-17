import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
//import logo from './logo.svg';
import './App.css';


const particleOptions = {
  "particles": {
    "number": {
        "value": 100
    },
    "size": {
        "value": 3
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particleOptions} />
        <Navigation />
         <Logo />
         <Rank />
        <ImageLinkForm />
        {/*<Facerecognition /> */}
      </div>
    );
  }
}

export default App;
