import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Facerecognition from './components/Facerecognition/Facerecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
//import logo from './logo.svg';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0320c2f93a3d4b24b0ceee149170bfa0'
});


const particleOptions = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl: '',
      box:{},
      route: 'signin'
    }
  }

  calculateFacelocation = (data) => {
    const clarifiaFace = data.outputs[0].data.regions[0].regioninfo.boundingbox;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol:clarifiaFace.left_col * width /100,
      topRow:clarifiaFace.right_col * height/100,
      rightCol:width - (clarifiaFace.right_col * width),
      botRow: height - (clarifiaFace.botRow * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
  this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    console.log('Click');
    this.setState({ imageUrl: this.state.input });
    console.log(this.imageUrl);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      //console.log("here");
    function(response) {
     this.displayFaceBox(this.calculateFacelocation(response)) ;
    },
    function(err) {
      // there was an error
    }
  );
  }

  onRouteChange = (route) => {
    this.setState({route});
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particleOptions} />
                
        
        {this.state.route === 'home' ?
        <div>
          <Navigation onRouteChange = {this.onRouteChange} />
        <Logo />
       <Rank />
       
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <Facerecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
      
      </div>
         : 
         (
           this.state.route === 'signin' ?
           <SignIn onRouteChange = {this.onRouteChange} />
           : <Register onRouteChange = {this.onRouteChange} />
         )
      
      }
      </div>
    );
  }
}

export default App;
