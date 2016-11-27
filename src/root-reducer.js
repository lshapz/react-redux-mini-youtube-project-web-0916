import { combineReducers } from 'redux'

function videos(state = { videos: []}, action) 
  {
  switch (action.type)
    {
      case 'FETCH_VIDEOS':
        return Object.assign({}, state, {videos: action.payload})
      case 'RECEIVE_VIDEOS':
        var videos = action.payload.map((vid)=>{
        return {id: vid.id.videoId, thumb: vid.snippet.thumbnails.default.url, title: vid.snippet.title, primary: false} })
        videos[0].primary = true
        return Object.assign({}, state, {videos: videos})
      case 'NEW_PRIMARY':
        var new_state = state.videos.filter(thing=>{return thing.id !== action.payload }).map(thing=>{ return {id: thing.id, thumb: thing.thumb, title: thing.title, primary: false}  })
        var new_primary = state.videos.filter(thing=>{return thing.id === action.payload }).map(thing=>{ return {id: thing.id, thumb: thing.thumb, title: thing.title, primary: true}  })
        return Object.assign({}, state, {videos: [...new_state, ...new_primary]})
      default:
       return state
    }
  } 

const rootReducer = combineReducers({videos})

export default rootReducer
