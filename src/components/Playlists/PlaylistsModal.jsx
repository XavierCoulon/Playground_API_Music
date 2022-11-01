import React from "react";
import Playlists from "./Playlists";

function PlaylistsModal({ trackId, onClose }) {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="flex flex-col max-w-sm p-6 bg-white ">
          <span onClick={onClose} className="flex justify-end cursor-pointer">
            X
          </span>
          <div className="mt-4 flex">
            <Playlists trackId={trackId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistsModal;
