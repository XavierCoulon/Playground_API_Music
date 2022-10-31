import React, { useEffect, useState } from "react";
import TrackItem from "./TrackItem";
import Button from "./UI/Button";
import TrackPlayer from "./TrackPlayer";
import PlaylistsModal from "./PlaylistsModal";
import { songs } from "../utils/axiosTools";
import { toast } from "react-toastify";

const TracksList = () => {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [trackSrc, setTrackSrc] = useState();
  const [playlistsModal, setPlaylistsModal] = useState({
    isActive: false,
    trackId: null,
  });

  useEffect(() => {
    songs.getAll().then((result) => setData(result));
  }, []);

  const handlerDeleteTrack = async (id) => {
    const modale = toast.loading("Please wait...");
    songs
      .delete(id)
      .then(() =>
        songs.getAll().then((result) => {
          setData(result);
          toast.update(modale, {
            render: "All is good, track delete",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        })
      )
      .catch((error) => {
        toast.update(modale, {
          render: "Oupssss",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  const handlerPlayTrack = (trackSrc) => {
    setTrackSrc(trackSrc);
  };

  const handlerPlaylistModal = (trackId) => {
    setPlaylistsModal({ ...playlistsModal, isActive: true, trackId: trackId });
  };

  const handlerCloseModal = () => {
    setPlaylistsModal({ ...playlistsModal, isActive: false, trackId: null });
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    const modal = toast.loading("Please wait...");
    songs
      .upload(selectedFile)
      .then((result) => {
        // toast.success(`Song ${result.title} created`)
        toast.update(modal, {
          render: `All is good, ${result.title} uploaded!`,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .then(() => songs.getAll().then((result) => setData(result)))
      .catch((error) => {
        const messages = JSON.parse(error.response.data.message);
        toast.update(modal, {
          render: `Oupsss...`,
          type: "warning",
          isLoading: false,
          autoClose: 3000,
        });

        for (const message in messages) {
          toast.error(messages[message]);
        }
      });
  };

  return (
    <div>
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
            onPlaylist={handlerPlaylistModal}
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
      {playlistsModal.isActive && (
        <PlaylistsModal trackId={playlistsModal.trackId} onClose={handlerCloseModal} />
      )}
    </div>
  );
};

export default TracksList;
