import axios from 'axios'
const API_KEY = 'AIzaSyCVhtKbqqUK6f56QCySSGZ4qvhOf9rWXDM'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}+&type=video`)
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
