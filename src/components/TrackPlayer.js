import React from "react";

const TrackPlayer = ({ src }) => {
  return (
    <audio className="absolute bottom-0 m-10 w-2/4" autoPlay controls src={src}></audio>
  );
};

export default TrackPlayer;
