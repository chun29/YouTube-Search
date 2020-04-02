import axios from "axios";
const KEY = "YOUR_API_KEY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 30,
    type: "video",
    key: KEY
  }
});
