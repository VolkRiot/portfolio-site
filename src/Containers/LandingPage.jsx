import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
        <Row>
          <Col id="intro-text" md={12}>
            <h1>
              Hello, my name is <span id="typed-span" />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <a href="https://github.com/VolkRiot">
              <i
                className="fa fa-github fa-5x header-icon"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.linkedin.com/in/mishametrikin/">
              <i
                className="fa fa-linkedin-square fa-5x header-icon"
                aria-hidden="true"
              />
            </a>
            <a href="https://drive.google.com/file/d/0ByEhfmA5zD1OTmJEQjFVYTF3eFU/view?usp=sharing">
              <i
                className="fa fa-handshake-o fa-5x header-icon"
                aria-hidden="true"
              />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
