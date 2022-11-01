import React, { useEffect, useState } from "react";
import { playlists } from "../../utils/axiosTools.js";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({trackId}) => {
  const [data, setData] = useState();

  useEffect(() => {
    playlists.getAll().then((result) => setData(result));
  }, []);

  return (
    data && (
      <div className="text-center">
        <ul>
          {data.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              id={playlist.id}
              title={playlist.title}
              trackId={trackId}
            />
          ))}
        </ul>
      </div>
    )
  );
};

export default Playlists;
