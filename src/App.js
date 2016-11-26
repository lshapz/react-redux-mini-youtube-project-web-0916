import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import {requestVideos, receiveVideos, fetchVideos, fetchVideosIfNeeded} from './actions'
import {bindActionCreators} from 'redux'
// const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
// const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
// import axios from 'axios'
// const axios = require("axios")

// const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
// const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
// var vids = []
// function thing(){ 
//     axios({
//     method: 'get',
//     url: `${ROOT_URL}/?q=mountain+goats&part=snippet&key=${API_KEY}`,
//     headers: []
//   }).then(response=>{return [response.data.items[0].snippet.thumbnails.default.url, response.data.items[0].id.videoId]})}
// thing()



class App extends Component {
 constructor(props){
  super(props)

  this.bigger = this.bigger.bind(this)
  this.submitItemForm = this.submitItemForm.bind(this)
  // this.fetchVideos = this.fetchVideos.bind(this)
 }

 
 
  submitItemForm(event){
    //alert('hello')
    event.preventDefault()
    const searchTerm = event.target.children[0].children[1].value
    
    // props.triggerSearch.default(searchTerm)
    this.props.dispatch(fetchVideos(searchTerm))

  }

  bigger(event){
    event.preventDefault()
    var iframe = event.target.parentElement.children[1]
    
    if (iframe.attributes.hasOwnProperty('hidden'))
      {iframe.removeAttribute('hidden')}
    else {iframe.setAttribute('hidden', 'true')}
    // if event.target.
    
    // if (event.target.tagName === 'IMG'){
    //  return 
    // }

  }

  render() {
    
    return (
      <div className="App">
        App goes here
        <Search submitItemForm={this.submitItemForm} actions={this.props.actions} dispatch={this.props.dispatch} />
        <Display videos={this.props.videos.videos} toggleHidden={this.bigger} />
        
      </div>
    );
  }
}

// export default App;



function mapStateToProps(state) {
  return {videos: state.videos}
}

// function mapDispatchToProps(dispatch){
//   return {actions: bindActionCreators({}, dispatch)}

// }

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
