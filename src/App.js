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
});


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
      imageUrl: '',
      box:{}
    }
  }

  calculateFacelocation = (data) => {
    const clarifiaFace = response.outputs[0].data.regions[0].regioninfo.boundingbox;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol:clarifiaFace.left_col * width /100,
      topRow:clarifiaFace.right_col * height/100,
      rightCol:width - (clarifiaFace.right_col * width),
      botRow: heigth - (clarifiaFace.topRow * height)
    }
  }

  displayFaceBox = (box){
    this.setState({box: box})
  }
  onInputChange = (event) => {
  this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    console.log('Click');
    this.setState({ imageUrl: this.state.input });
    console.log(this.imageUrl);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      console.log("here");
    function(response) {
     this.displayFaceBox(this.calculateFacelocation(response)) ;
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
        <Facerecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;
