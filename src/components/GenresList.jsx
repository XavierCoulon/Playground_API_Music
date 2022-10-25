import React, { useEffect, useState } from "react";
import { getAllGenres } from "../utils/axiosTools";

const GenresList = () => {
  const [genresList, setGenresList] = useState();

  useEffect(() => {
    getAllGenres().then((result) => setGenresList(result.data));
  }, []);

  return (
    genresList && (
      <div>
        <label htmlFor="playlists">Able to display genres: </label>

        <select name="genre" id="genre">
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
