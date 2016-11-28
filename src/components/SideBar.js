import React, { Component } from 'react'
import { updatePrimary } from '../actions' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SideBar extends Component{
	handleClick(event){
		event.preventDefault()
		this.props.updatePrimary(event.target.id)
	}
	render(){
			let sideVids = this.props.videos.filter((video)=>{
				return (video.id !== this.props.primaryVidId)
			}
		).map((video) =>{ return <p onClick={this.handleClick.bind(this)} id={video.id}><img src={video.thumbNail} id={video.id} /></p>})
		return(
			<div className="thumb">
				{sideVids}
			</div>
			)
	}
}


function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({updatePrimary}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)