import React, { useEffect, useState } from "react";
import TrackItem from "./TrackItem";
import Button from "./UI/Button";
import TrackPlayer from "./TrackPlayer";
import { songs } from "../utils/axiosTools";

const TracksList = () => {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [trackSrc, setTrackSrc] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    songs
      .getAll()
      .then((result) => setData(result))
      .then(() => setIsloading(false));
  }, []);

  const handlerDeleteTrack = async (id) => {
    setIsloading(true);
    songs
      .delete(id)
      .then((result) => alert(result.message))
      .then(() => songs.getAll().then((result) => setData(result)))
      .then(() => setIsloading(false));
  };

  const handlerPlayTrack = (trackSrc) => {
    setTrackSrc(trackSrc);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    setIsloading(true);
    songs
      .upload(selectedFile)
      .then((result) => alert(`Song ${result.title} created`))
      .then(() => songs.getAll().then((result) => setData(result)))
      .then(() => setIsloading(false));
  };

  return (
    <div>
      {isLoading && (
        <h2 className="text-3xl font-bold underline text-red-500">
          Loading...
        </h2>
      )}
      <h1 className="text-center text-3xl m-5">
        API Tests - without design 😉{" "}
      </h1>
      <ul className="flex-col m-20">
        {data.map((track) => (
          <TrackItem
            key={track.id}
            id={track.id}
            title={track.title}
            artist={track.artist.name}
            mp3={track.link}
            img={track.album.picture}
            onDelete={handlerDeleteTrack}
            onClick={handlerPlayTrack}
          />
        ))}
      </ul>
      <form className="text-center">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="file"
        ></label>
        <input
          className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
          id="file"
          type="file"
          accept="mp3"
          onChange={changeHandler}
        />
        <Button type="click" label="Upload" onClick={handleSubmission} />
      </form>
      <TrackPlayer src={trackSrc} />
    </div>
  );
};

export default TracksList;
