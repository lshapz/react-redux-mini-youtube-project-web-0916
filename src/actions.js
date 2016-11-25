import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

function fetchVideos(searchTerm){
  const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`).then(response=>{response})
  .then((response)=>{console.log(response)})
  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }


}

export default fetchVideos