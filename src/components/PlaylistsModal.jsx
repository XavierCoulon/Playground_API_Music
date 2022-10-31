import React from "react";
import Button from "./UI/Button";
import Playlists from "./Playlists";

function PlaylistsModal({ trackId, onClose }) {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="max-w-sm p-6 bg-white divide-y divide-gray-500">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl">Playlist Add</h3>
          </div>
          <div className="mt-4">
            <Playlists trackId={trackId} />
            <Button type="click" label="Close" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistsModal;
