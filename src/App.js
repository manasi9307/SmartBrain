import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Facerecognition from './components/Facerecognition/Facerecognition';
//import logo from './logo.svg';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0320c2f93a3d4b24b0ceee149170bfa0'
})


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
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
  this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    console.log('Click');
    this.setState({ imageUrl: this.state.input })
    console.log(this.imageUrl);
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
    function(response) {
     console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particleOptions} />
        <Navigation />
         <Logo />
         <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <Facerecognition imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;
