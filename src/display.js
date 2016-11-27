import React from 'react'
export default function ShowVideo(props){

// debugger
   var big = props.videos.filter(vid=>{return vid.primary === true})
   var big_id = big[0] ? big[0].id :  "dHg50mdODFM" 
 
 var show = props.videos.filter(vid=>{return vid.primary === false}).map((vid, index) =>{
  return <div key={index} onClick={props.newBig} id={vid.id}>
    <p id={vid.id}>{vid.title}</p>
    <p id={vid.id}><img className={"video-item " + vid.id } id={vid.id} src={vid.thumb} alt={vid.title} /></p>
  </div>
 })



// debugger
return (
  <div id="container"> 
  <div id="big">
            <iframe className="video-detail"
              width="640" height="360"
              src={'https://www.youtube.com/embed/'+ big_id } />

  </div>
  <div className="thumb"> 
    {show}
  </div>
  </div>
  )
}
