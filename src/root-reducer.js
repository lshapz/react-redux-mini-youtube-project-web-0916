import { combineReducers } from 'redux'
import {requestVideos, receiveVideos}  from './actions'
 // const FETCH_VIDEOS_SUCCESS = 'FETCH_POSTS_SUCCESS';
 // const FETCH_VIDEOS_FAILURE = 'FETCH_POSTS_FAILURE';


// function reducer(state = [], action){
//   switch (action.type) {
//   case FETCH_VIDEOS:// start fetching posts and set loading = true
//     return  [...state, action.payload ]; 
//   default:
//     return state
//   }
// }

function videos(state = { isFetching: false, videos: []}, action) 
  {
  switch (action.type)
    {
      case 'FETCH_VIDEOS':
        return Object.assign({}, state, {isFetching: false, videos: action.payload})
      case 'RECEIVE_VIDEOS':
        return Object.assign({}, state, {isFetching: true, videos: action.payload})
      default:
       return state
    }
  } 



const rootReducer = combineReducers({videos})

export default rootReducer
