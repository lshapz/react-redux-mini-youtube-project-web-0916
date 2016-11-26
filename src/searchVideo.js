import React from 'react'
  
export default function SearchVideo(props){
  
return(
  <form className="search-bar" onSubmit={props.submitItemForm}>
    <p><label className="search-bar">Search For a Video</label> <input type="text" id="term" /></p>
    <p><input className="search-bar" type="submit" id="submit" name="submit" /> </p>
  </form>
  )

}