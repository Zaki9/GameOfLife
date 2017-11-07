import React, { Component } from 'react';
import Grid_Layout from '../containers/grid_layout.js';
import PageSetup from './pageSetup.js';

export default class App extends Component {
  render() {
    return (
      <div className= "main">

      <PageSetup />
      
      <Grid_Layout / >



      </div>
    );
  }
}
