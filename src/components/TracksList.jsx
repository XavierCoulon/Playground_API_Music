import React, { useEffect, useState } from "react";
import TrackItem from "./TrackItem";
import Button from "./UI/Button";
import TrackPlayer from "./TrackPlayer";
import { getAllSongs, deleteSong, uploadTrack } from "../utils/axiosTools";

const TracksList = () => {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [trackSrc, setTrackSrc] = useState();

  useEffect(() => {
    getAllSongs().then((result) => setData(result.data));
  }, []);

  const handlerDeleteTrack = async (id) => {
    deleteSong(id).then(() => {
      getAllSongs().then((result) => setData(result.data));
    });
  };

  const handlerPlayTrack = (trackSrc) => {
    setTrackSrc(trackSrc);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    uploadTrack(selectedFile).then(() =>
      getAllSongs().then((result) => setData(result.data))
    );
  };

  return (
    <div>
      <h1>API Tests - without design 😉 </h1>
      <ul>
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
      <form>
        <label htmlFor="file">Select a MP3</label>
        <input id="file" type="file" accept="mp3" onChange={changeHandler} />
        <Button type="click" label="Upload" onClick={handleSubmission} />
      </form>
      <TrackPlayer src={trackSrc} />
    </div>
  );
};

export default TracksList;
