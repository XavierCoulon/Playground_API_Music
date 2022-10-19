import React, { useEffect, useState } from "react";
import axios from "axios";
import Track from "./Track";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3ZTA5OWU3LWZmYmUtNGY0Zi04MGZiLWVhZThiNThkZTUxZiIsInVzZXJuYW1lIjoid2lsZGVycyIsImVtYWlsIjoid2lsZGVyc0BnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImNyZWF0ZWRfYXQiOiIyMDIyLTEwLTE4VDE0OjIzOjEyLjc2NFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0xOFQxNDoyMjo0Ni43MjdaIiwiaWF0IjoxNjY2MTAzMDY1fQ.uKZd2lUn9iundgu3QVLMNwZwmnxhV3qUzJ3xNB10tW8";

const apiUri = "https://wildify-api.jidayyy.com/api/v1";

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${accessToken}`;
  return config;
});

const TracksList = () => {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  const fetchData = async () => {
    const result = await axios(`${apiUri}/songs/`);
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlerDeleteTrack = async (id) => {
    await axios.delete(`${apiUri}/songs/${id}`);
    fetchData();
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    await axios.post(`${apiUri}/songs/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    fetchData();
  };

  return (
    <div>
      <form>
        <label htmlFor="file">Select a MP3</label>
        <input id="file" type="file" accept="mp3" onChange={changeHandler} />
        <button onClick={handleSubmission}>Upload</button>
      </form>
      <ul>
        {data.map((track) => (
          <Track
            key={track.id}
            id={track.id}
            title={track.title}
            artist={track.artist.name}
            mp3={track.link}
            img={track.album.picture}
            onDelete={handlerDeleteTrack}
          />
        ))}
      </ul>
    </div>
  );
};

export default TracksList;
