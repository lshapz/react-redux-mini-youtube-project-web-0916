import React from 'react'

export default function ShowVideo(props){


 var vidz = props.videos.map((vid)=>{
  if (vid.id.kind == "youtube#video"){
    return {id: vid.id.videoId, thumb: vid.snippet.thumbnails.default.url}
  }
})
 
 

 var show = vidz.map((vid, index) =>{
  return <div key={index} onClick={props.toggleHidden} className="big"><img className="video-item" id={vid.id} src={vid.thumb}  />
  <iframe hidden className="video-detail"
        width="640" height="360"
        src={'https://www.youtube.com/embed/'+ vid.id }></iframe>
  </div>
 })


return (

  <div>
  {show}
  </div>
  )
}
