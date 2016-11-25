import React from 'react'
import fetchVideos from './actions'

export default function SearchVideo(props){
  
  function submitItemForm(event){
    //alert('hello')
    event.preventDefault()
    const searchTerm = event.target.children[0].children[1].value
    // props.triggerSearch.default(searchTerm)
    setTimeout(() => {props.dispatch(props.action(searchTerm))}, 5000)
debugger
  }


return(
  <form onSubmit={submitItemForm}>
  <p><label>Search For a Video</label><input type="text" id="term" /></p>
  <p><input type="submit" id="submit" name="submit" /> </p>
  </form>
  )

}