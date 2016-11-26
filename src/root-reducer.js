import { combineReducers } from 'redux'

function videos(state = { videos: []}, action) 
  {
  switch (action.type)
    {
      case 'FETCH_VIDEOS':
        return Object.assign({}, state, {videos: action.payload})
      case 'RECEIVE_VIDEOS':
        return Object.assign({}, state, {videos: action.payload})
      default:
       return state
    }
  } 

const rootReducer = combineReducers({videos})

export default rootReducer
