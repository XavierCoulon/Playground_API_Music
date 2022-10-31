import React from "react";
import Button from "./UI/Button";
import { playlists } from "../utils/axiosTools.js";

function PlaylistItem({ id, title, trackId }) {
  const assignTrack = () => {
    playlists
      .assignTrack(id, { songIds: [trackId] })
      .then((results) => console.log(results));
  };

  return (
    <div>
      <li key={id}>{title}</li>
      <Button type="click" label="Confirm" onClick={assignTrack} />
    </div>
  );
}

export default PlaylistItem;
