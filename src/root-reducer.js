import { combineReducers } from 'redux'

function reducer(state = {videos: [], primaryVidId: "REu2BcnlD34"}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
	    let videos = action.payload.data.items.map((item)=>{
	    	return {id: item.id.videoId, thumbNail: item.snippet.thumbnails.default.url}
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
