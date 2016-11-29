import React from 'react'
import {newPrimary} from './actions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ShowVideo extends React.Component {

  constructor(){
    super()
    this.bigVid = this.bigVid.bind(this)
  }

  bigVid(event){
    event.preventDefault()
    var id = event.target.id 
    this.props.newPrimary(id)
  }

render()
  {
   var big = this.props.videos.filter(vid=>{return vid.primary === true})
   var big_id = big[0] ? big[0].id :  "dHg50mdODFM" 
 
 var show = this.props.videos.filter(vid=>{return vid.primary === false}).map((vid, index) =>{
  return <div key={index} onClick={this.bigVid} id={vid.id}>
    <p id={vid.id}>{vid.title}</p>
    <p id={vid.id}><img className={"video-item " + vid.id } id={vid.id} src={vid.thumb} alt={vid.title} /></p>
  </div>})

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
  )}
}


function mapStateToProps(state) {
  return state.videos
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({newPrimary}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideo)

