import React from 'react';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a71a0a075dae44f3818027e1552c3cd6'
 });

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    app.workflow.predict('face', "https://www.coatscareers.com/wp-content/uploads/2017/04/yashmiin-image.jpg").then(
      function(response){
        console.log(response)
      },
      function(err){
        console.log(err)
      }
  );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions}
        />
        <Navigation />
        <Logo />
        <Rank />  
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
