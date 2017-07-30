import React, { Component } from 'react';
import { Col, Jumbotron, Button } from 'react-bootstrap';

import './LandingPage.style.css';

import Granim from 'granim';

export default class LandingPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
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
  }
  render() {
    return (
      <div>
        <canvas id="granim-canvas" />
        <span>
          <p>TEST TEXT</p>
        </span>
      </div>
    );
  }
}
