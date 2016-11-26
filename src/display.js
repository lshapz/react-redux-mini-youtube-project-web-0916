import React from 'react'
export default function ShowVideo(props){

// debugger
   var big = props.videos.filter(vid=>{return vid.primary === true})
   var big_id = big[0] ? big[0].id :  "wRP6egIEABk" 
 
 var show = props.videos.filter(vid=>{return vid.primary === false}).map((vid, index) =>{
  return <div key={index} onClick={props.newBig} id={vid.id}>
          <h4 id={vid.id}>{vid.title}</h4>
          <img className={"video-item " + vid.id } id={vid.id} src={vid.thumb} alt={vid.title} />
         </div>
 })



// debugger
return (
  <div>
            <iframe className="video-detail"
              width="640" height="360"
              src={'https://www.youtube.com/embed/'+ big_id } />

  <br /> 
    {show}
  </div>
  )
}
