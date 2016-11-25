import { combineReducers } from 'redux'
import {FETCH_VIDEOS, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE, fetchVideos, fetchVideosSuccess, fetchVideosFailure}  from './actions'

function reducer(state = [], action){
  switch (action.type) {
  case FETCH_VIDEOS:// start fetching posts and set loading = true
    return  [...state, action.payload ]; 
  case FETCH_VIDEOS_SUCCESS:// return list of posts and make loading = false
    return [ ...state, action.payload ];
  case FETCH_VIDEOS_FAILURE:// return error and make loading = false
    return [...state, action.payload ];
  default:
    return state
  }
}


const rootReducer = combineReducers({reducer})

export default rootReducer
