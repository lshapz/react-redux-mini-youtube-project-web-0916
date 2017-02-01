import React, { Component } from 'react'


export default class extends Component{
	render(){
		return(
			<iframe className="video-detail"
                allowtransparency="true"
                frameborder="0"
                src={"https://embed.spotify.com/?uri=spotify:track:" + this.props.id  } />
			)
	}
}