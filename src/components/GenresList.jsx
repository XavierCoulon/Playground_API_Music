import React, { useEffect, useState } from "react";
import { genres } from "../utils/axiosTools";

const GenresList = () => {
  const [genresList, setGenresList] = useState();

  useEffect(() => {
    genres.getAll().then((result) => setGenresList(result));
  }, []);

  return (
    genresList && (
      <div className="text-center">
        <label htmlFor="playlists">Able to display genres: </label>

        <select
          className="text-grey-500 mr-5 py-2 px-6 rounded-full border-0 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-amber-50 hover:text-amber-700"
          name="genre"
          id="genre"
        >
          {genresList.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    )
  );
};

export default GenresList;
