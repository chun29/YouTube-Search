import React from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 10,
      loading: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this), false);
  }
  componentDidUpdate(prevProps) {
    if (this.props.videos !== prevProps.videos) {
      this.setState({
        items: 10
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this), false);
  }

  handleScroll = () => {
    var nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (nearBottom) {
      if (this.state.loading === false) {
        this.loadMore();
      }
    }
  };
  showItems() {
    let items = [];
    for (let i = 0; i < this.props.videos.length && i < this.state.items; i++) {
      items.push(
        <VideoItem
          key={this.props.videos[i] && this.props.videos[i].id.videoId}
          video={this.props.videos[i] && this.props.videos[i]}
        />
      );
    }
    return items;
  }

  loadMore() {
    if (this.state.items === 30) {
      return;
    }

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loading: false });
    }, 500);
  }

  render() {
    return (
      <div ref="myscroll" className="video-list-container">
        {this.props.videos.length ? <>{this.showItems()}</> : "暫無結果"}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}
export default connect(mapStateToProps)(VideoList);
