import React, { useEffect, useState } from "react";
import { getAllPlaylist } from "../utils/axiosTools";

const Playlists = () => {
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    getAllPlaylist().then((result) => setPlaylists(result.data));
  }, []);

  return (
    playlists && (
      <div>
        <label htmlFor="playlists">Able to display playlists:</label>

        <select name="playlists" id="playlists">
          {playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.title}>
              {playlist.title}
            </option>
          ))}
        </select>
      </div>
    )
  );
};

export default Playlists;
