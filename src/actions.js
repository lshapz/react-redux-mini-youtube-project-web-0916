import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'


function youtube(searchTerm){
 
  return axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)

}

export default function fetchVideos(searchTerm){
  return {
    type: 'FETCH_VIDEOS',
    payload: youtube(searchTerm)
  }
}