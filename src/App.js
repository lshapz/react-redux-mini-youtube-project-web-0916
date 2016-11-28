import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';

class App extends Component {

 
  render() {
    // debugger
    return (
      <div className="app">
        <h1> SEARCH YOUTUBE FOR SOME VIDEOS OR WHATEVER </h1>
        <Search />
        <Display /> 
      </div>
    );
  }
}



function mapStateToProps(state) {
  return state.videos
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
