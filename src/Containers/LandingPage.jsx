import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Particles from 'particlesjs';
import Typed from 'typed.js';

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
      selector: '#particles-canvas',
      sizeVariations: 4,
      speed: 0.75,
      color: '#ffffff',
      connectParticles: false
    });

    const strings = ['Mikhail', 'Misha', 'Michael'];

    const options = {
      strings: strings,
      typeSpeed: 120,
      backSpeed: 70,
      startDelay: 1000,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '_'
      // onComplete: (self) => {},
    };

    this.typed = new Typed('#typed-span', options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <div>
        <canvas id="granim-canvas" />
        <div id="particles-js" />
        <canvas id="particles-canvas" />
        <Col id="intro-text" md={12}>
          <h1>
            Hello, my name is <span id="typed-span" />
          </h1>
        </Col>
      </div>
    );
  }
}
