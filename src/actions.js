import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

function fetchVideos(searchTerm){
  var vids = []
  const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)
  .then(response=>{ vids = response.data.items})
  // })

  return {
    type: "FETCH_VIDEOS",
    payload: {videos: vids}
  }


}

export default fetchVideos