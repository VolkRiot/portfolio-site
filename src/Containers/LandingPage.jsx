import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron>
          <Button>Test</Button>
        </Jumbotron>
      </div>
    );
  }
}
