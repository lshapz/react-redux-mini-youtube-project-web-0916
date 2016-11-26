import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import {fetchVideos, newPrimary} from './actions'

class App extends Component {
  constructor(props){
    super(props)
    // this.showIframe = this.showIframe.bind(this)
    this.searchVids = this.searchVids.bind(this)
    this.bigVid = this.bigVid.bind(this)
  }
 
  searchVids(event){
    event.preventDefault()
    const searchTerm = event.target.children[0].children[1].value
    this.props.dispatch(fetchVideos(searchTerm))
  }

  bigVid(event){
    event.preventDefault()
    var id = event.target.id 
    // debugger
    this.props.dispatch(newPrimary(id))
  }



  // showIframe(event){
  //   event.preventDefault()    
  //   let iframe 
  //   if (event.target.tagName === 'IMG'){
  //       iframe = event.target.parentElement.parentElement.children[2]
  //       }
  //     else if (event.target.tagName === 'DIV'){
  //       iframe = event.target.children[2]
  //     }
  //     else if (event.target.tagName === 'P')
  //     {
  //       iframe = event.target.parentElement.children[2]
  //     }
  //   if (iframe.attributes.hasOwnProperty('hidden'))
  //     {iframe.removeAttribute('hidden')}
  //   else {iframe.setAttribute('hidden', 'true')}
  // }
  //toggleHidden={this.showIframe}

  render() {
    // debugger
    return (
      <div className="App">
        <h1> SEARCH YOUTUBE FOR SOME VIDEOS OR WHATEVER </h1>
        <Search submitItemForm={this.searchVids} />
        <Display videos={this.props.videos} newBig={this.bigVid} /> 
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
