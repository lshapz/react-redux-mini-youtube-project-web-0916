import React, { Component } from 'react'


export default class extends Component{
	render(){
		return(
			<iframe id="big" className="video-detail"
                width="640" height="360"
                src={'https://www.youtube.com/embed/'+ this.props.id } />
			)
	}
}