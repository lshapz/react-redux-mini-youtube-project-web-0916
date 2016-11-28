import React from 'react'
import {connect} from 'react-redux';
import {fetchVideos} from './actions'

class SearchVideo extends React.Component {
  
constructor(){
  super()
  this.searchVids = this.searchVids.bind(this)
}

searchVids(event){
  event.preventDefault()
  const searchTerm = event.target.children[0].children[1].value
  this.props.dispatch(fetchVideos(searchTerm))
}

render(){
  return (
    <form className="search-bar" onSubmit={this.searchVids}>
      <p><label className="search-bar">Search For a Video</label> <input type="text" id="term" /></p>
      <p><input className="search-bar" type="submit" id="submit" name="submit" /> </p>
    </form>
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(SearchVideo)
