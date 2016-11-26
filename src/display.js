import React from 'react'

export default function ShowVideo(props){


 var vidz = props.videos.map((vid, index)=>{
  return <li key={index}>{vid.etag}</li>
})


// debugger
return(

  <ul>
  {vidz}
  </ul>
  )
}
