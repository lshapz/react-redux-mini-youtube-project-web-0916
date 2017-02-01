import { combineReducers } from 'redux'

function reducer(state = {videos: [], primaryVidId: "2HCQfx7Dv4yHlrSyvMwksF"}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
    // debugger
	    let videos = action.payload.data.tracks.items.map((item)=>{
	    	return {id: item.id, thumbNail: item.album.images[0].url}
	    })
	    return Object.assign({}, state, {videos: videos, primaryVidId: videos[0].id})
	case 'UPDATE_PRIMARY':
		return Object.assign({}, state, {videos: state.videos, primaryVidId: action.payload})
    default:
      return state
  }
}


// const rootReducer = combineReducers({reducer})

// export default rootReducer
export default reducer
