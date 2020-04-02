const initState = {
  videos: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {
        ...state,
        videos: action.payload.data.items
      };
    default:
      return state;
  }
};

export default reducer;
