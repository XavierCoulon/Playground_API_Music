import React from "react";
import Button from "../UI/Button";
import { playlists } from "../../utils/axiosTools.js";
import { toast } from "react-toastify";

function PlaylistItem({ id, title, trackId }) {
  const assignTrack = () => {
    playlists
      .assignTrack(id, { songIds: [trackId] })
      .then(() => toast.success(`All good, track added to playlist ${title}`))
      .catch((error) => {
        toast.error("Oupssss");
      });
  };

  return (
    <div className="flex items-center m-1">
      <div className="w-1/2">
        <li key={id}>{title}</li>
      </div>
      <div className="w-1/2">
        <Button type="click" label="Add" onClick={assignTrack} />
      </div>
    </div>
  );
}

export default PlaylistItem;
