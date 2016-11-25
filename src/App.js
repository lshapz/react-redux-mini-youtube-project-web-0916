import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import * as actions from './actions'
import {bindActionCreators} from 'redux'


class App extends Component {

  render() {
    debugger
    return (
      <div className="App">
        App goes here
        <Search actions={this.props.actions} action={actions.default} />
        <Display videos={this.props.videos}/>

      </div>
    );
  }
}

// export default App;



function mapStateToProps(state) {
  return {videos: state.videos}
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
