import React from "react";
import { fetchVideos } from "../store/fetchVideos";
import { connect } from "react-redux";
import searchImg from "./search.png";

class Searchbar extends React.Component {
  state = {
    term: ""
  };
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchVideos(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar-container">
            <input
              autoComplete="off"
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
              placeholder="search ..."
            />
            <img src={searchImg} />
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: keyword => dispatch(fetchVideos(keyword))
  };
};
export default connect(null, mapDispatchToProps)(Searchbar);
