import React, { Component } from 'react';
import {
  Container
} from 'native-base';

import Toolbar from './src/header';
import Body from './src/body';
import Footer from './src/footer';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Toolbar />
        <Body />
        <Footer />
      </Container>
    );
  }
}