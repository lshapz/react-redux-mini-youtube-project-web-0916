import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ShowVideos from './components/ShowVideos'
import { connect } from 'react-redux'



class App extends Component {

  render() {
    return (
      <div className="app">
      	<h1 >Search Youtube</h1>
        <SearchBar />
		<ShowVideos />      
      </div>
    );
  }
}


function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(App)