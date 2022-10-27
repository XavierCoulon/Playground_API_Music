import React, { useEffect, useState } from "react";
import { playlists } from "../utils/axiosTools";

const Playlists = () => {
  const [data, setData] = useState();

  useEffect(() => {
    playlists.getAll().then((result) => setData(result));
  }, []);

  return (
    data && (
      <div className="text-center">
        <label htmlFor="playlists">Able to display playlists:</label>

        <select
          className="text-grey-500 mr-5 py-2 px-6 rounded-full border-0 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-amber-50 hover:text-amber-700"
          name="playlists"
          id="playlists"
        >
          {data.map((playlist) => (
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
