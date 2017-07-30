import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Particles from 'particlesjs';

import './LandingPage.style.css';

import Granim from 'granim';

export default class LandingPage extends Component {
  componentDidMount() {
    new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [['#2b5876', '#4e4376'], ['#1A2980', '#26D0CE']],
          transitionSpeed: 15000
        }
      }
    });
    Particles.init({
      selector: '#particles-canvas'
    });
  }
  render() {
    return (
      <div>
        <canvas id="granim-canvas" />
        <div id="particles-js" />
        <canvas id="particles-canvas" />
      </div>
    );
  }
}
