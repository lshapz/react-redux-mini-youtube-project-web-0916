import React from 'react'

export default function ShowVideo(props){


 var vidz = props.videos.map((vid)=>{
  if (vid.id.kind === "youtube#video"){
    return {id: vid.id.videoId, thumb: vid.snippet.thumbnails.default.url, title: vid.snippet.title}
  }}).filter(vid=>{return vid != undefined})
 var show = vidz.map((vid, index) =>{
  debugger
  return <div key={index} onClick={props.toggleHidden} className="big">
         <p>{vid.title}</p>
         <p><img className="video-item" id={vid.id} src={vid.thumb} alt={vid.title} /></p>
          <iframe hidden className="video-detail"
              width="640" height="360"
              src={'https://www.youtube.com/embed/'+ vid.id } />
         </div>
 })


return (

  <div>
  {show}
  </div>
  )
}
