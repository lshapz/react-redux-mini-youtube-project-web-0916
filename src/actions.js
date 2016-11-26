import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

// import { createAction } from 'redux-actions'
 const FETCH_VIDEOS = 'FETCH_POSTS';
 const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
 // const FETCH_VIDEOS_FAILURE = 'FETCH_POSTS_FAILURE';

export function requestVideos(searchTerm) 
{ debugger
  return {type: FETCH_VIDEOS, payload: searchTerm}}


export function receiveVideos(json) 
{
  return {type: RECEIVE_VIDEOS, payload: json}}


export function fetchVideos(searchTerm) 
{ return function(dispatch) 
  {
    dispatch(requestVideos(searchTerm))
    return axios({
    method: 'get',
    url: `${ROOT_URL}/?q=${searchTerm}&part=snippet&key=${API_KEY}`,
    headers: []
  }).then(response=>{dispatch(receiveVideos(response.data.items))})
  }

}

function shouldFetchVideos(state) {
  if (typeof state.videos === 'string' && state.isFetching === false) {
    return true
  } else if (state.isFetching) {
    return false
  } 
}

export function fetchVideosIfNeeded(dispatch, getState, searchTerm){

    if (shouldFetchVideos(getState().videos, searchTerm)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchVideos(searchTerm))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }




// const fetchVideos = searchTerm => dispatch => {
//   dispatch(requestVideos(searchTerm))
//   return fetch(`${ROOT_URL}/?q=${searchTerm}&part=snippet&key=${API_KEY}`)
//     .then(response => response.json())
//     .then(json=>dispatch(getVideos(searchTerm, json)))
// }

// export const getVideos = (reddit, json) => ({
//   type: 'GET_VIDEOS', videos: json.data.items
// })

// export function fetchVideos(searchTerm) {
//   const request = 
//   return {type: FETCH_VIDEOS, payload: request}
// // .then({type: FETCH_VIDEOS, payload: })
// }

// export function fetchVideosSuccess(posts) {
//   return {
//     type: FETCH_VIDEOS_SUCCESS,
//     payload: posts
//   };
// }

// export function fetchVideosFailure(error) {
//   return {
//     type: FETCH_VIDEOS_FAILURE,
//     payload: error
//   };
// }






// // function youtube(searchTerm){
 
// //   return axios.get(`https://www.googleapis.com/youtube/v3/search?q=)

// // }

// // export default function fetchVideos(searchTerm){
//   return {
//     type: 'FETCH_VIDEOS',
//     payload: Promise.resolve(youtube(searchTerm))
//   }
// }