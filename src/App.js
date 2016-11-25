import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import {fetchVideos, fetchVideosFailure, fetchVideosSuccess} from './actions'
import {bindActionCreators} from 'redux'


class App extends Component {

  render() {
    debugger
    return (
      <div className="App">
        App goes here
        <Search actions={this.props.actions} />
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
  // debugger
    return {actions: bindActionCreators({fetchVideos: fetchVideos, fetchVideosFailure: fetchVideosFailure, fetchVideosSuccess: fetchVideosSuccess}, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
