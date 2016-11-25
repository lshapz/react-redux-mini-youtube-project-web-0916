import React from 'react'
export default function ShowVideo(props){
var videos = props.videos.map((vid, idx)=>{
  <li key={idx}>{vid}</li>
})


return(
  <ul>{videos}</ul>
  )

}