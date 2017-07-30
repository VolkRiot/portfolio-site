import React, { Component } from 'react';
import { Col, Jumbotron, Button } from 'react-bootstrap';

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
        <canvas
          id="granim-canvas"
          style={{
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1
          }}
        />
        <span>
          <p>TEST TEXT</p>
        </span>
      </div>
    );
  }
}
