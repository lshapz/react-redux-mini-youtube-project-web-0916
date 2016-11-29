import React, { Component } from 'react'
import { fetchVideos } from '../actions' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainVideo  from './MainVideo'
import SideBar from './SideBar'

class ShowVideos extends Component{
	render(){
		return(
			<div >
				<MainVideo id={this.props.primaryVidId} />
				<SideBar />
			</div>)
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(ShowVideos)