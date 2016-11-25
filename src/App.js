import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import * as actionCreators from './actions'
import {bindActionCreators} from 'redux'


class App extends Component {

  render() {
    debugger
    return (
      <div className="App">
        App goes here
        <Search dispatch={this.props.store.dispatch} action={actionCreators.default} />
        <Display videos={this.props.videos} />

      </div>
    );
  }
}

// export default App;



function mapStateToProps(state) {
  return {videos: state.reducer}
}

function mapDispatchToProps(dispatch) {
  
  var fetch = actionCreators.default
  // debugger
  return {actions: bindActionCreators(fetch, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
