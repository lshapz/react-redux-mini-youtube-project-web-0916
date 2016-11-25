import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'


export const FETCH_VIDEOS = 'FETCH_POSTS';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_POSTS_FAILURE';


export function fetchVideos(searchTerm) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/?q=${searchTerm}&part=snippet&key=${API_KEY}`,
    headers: []
  });

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}

export function fetchVideosSuccess(posts) {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload: posts
  };
}

export function fetchVideosFailure(error) {
  return {
    type: FETCH_VIDEOS_FAILURE,
    payload: error
  };
}

// export




// function youtube(searchTerm){
 
//   return axios.get(`https://www.googleapis.com/youtube/v3/search?q=)

// }

// export default function fetchVideos(searchTerm){
//   return {
//     type: 'FETCH_VIDEOS',
//     payload: Promise.resolve(youtube(searchTerm))
//   }
// }