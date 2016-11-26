import React, { Component } from 'react';
import './App.css';
import Search from './searchVideo'
import Display from './display'
import {connect} from 'react-redux';
import {fetchVideos} from './actions'

class App extends Component {
 constructor(props){
  super(props)

  this.bigger = this.bigger.bind(this)
  this.submitItemForm = this.submitItemForm.bind(this)
 }

 
 
  submitItemForm(event){
    event.preventDefault()
    const searchTerm = event.target.children[0].children[1].value
    this.props.dispatch(fetchVideos(searchTerm))
  }

  bigger(event){
    event.preventDefault()    
    let iframe 
    if (event.target.tagName === 'IMG'){
        iframe = event.target.parentElement.parentElement.children[2]
        }
      else if (event.target.tagName === 'DIV'){
        iframe = event.target.children[2]
      }
      else if (event.target.tagName === 'P')
      {
        iframe = event.target.parentElement.children[2]
      }
    if (iframe.attributes.hasOwnProperty('hidden'))
      {iframe.removeAttribute('hidden')}
    else {iframe.setAttribute('hidden', 'true')}


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



function mapStateToProps(state) {
  return {videos: state.videos}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
