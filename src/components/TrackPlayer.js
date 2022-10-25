import React from "react";

const TrackPlayer = ({ src }) => {
  return <audio  autoPlay controls src={src}></audio>;
};

export default TrackPlayer;
