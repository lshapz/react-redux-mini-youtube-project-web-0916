import React from 'react'
const show = function ShowVideo(props){
var videos = props.videos.map((vid, idx)=>{
  <li key={idx}><a href="{vid}">video</a></li>
})


return(
  <ul>{videos}</ul>
  )

}
show.defaultProps = {videos: [1, 'https://www.youtube.com/watch?v=wRP6egIEABk']}
export default show
