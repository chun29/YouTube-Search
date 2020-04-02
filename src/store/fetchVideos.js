import youtube from "../apis/youtube";
import "@babel/polyfill";

export const fetchVideos = termFromSearchBar => async (dispatch, getState) => {
  const response = await youtube.get("/search", {
    params: {
      q: termFromSearchBar
    }
  });
  dispatch({ type: "FETCH_VIDEOS", payload: response });
};
