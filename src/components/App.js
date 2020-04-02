import React from "react";
import SearchBar from "./Searchbar";
import VideoList from "./VideoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
