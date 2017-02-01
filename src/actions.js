import axios from 'axios'
const YT_API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const YT_ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  const videos = axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`)
  // (`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${YT_API_KEY}+&type=video`)
  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }
}

export function updatePrimary(id){
	return {
		type: 'UPDATE_PRIMARY',
		payload: id
	}
}
