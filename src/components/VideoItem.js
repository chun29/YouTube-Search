import React from "react";

const VideoItem = ({ video }) => {
  const url = video && `https://www.youtube.com/watch?v=${video.id.videoId}`;
  return (
    <div className="video">
      <a href={url} target="_blank">
        <img
          src={video && video.snippet.thumbnails.medium.url}
          alt={video && video.snippet.description}
        />
        <div className="header">{video && video.snippet.title}</div>
      </a>
    </div>
  );
};
export default VideoItem;
