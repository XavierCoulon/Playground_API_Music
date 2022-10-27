import React from "react";
import Button from "./UI/Button";

const TrackItem = ({ id, title, artist, mp3, img, onDelete, onClick }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  const clickHandler = () => {
    onClick(mp3);
  };

  return (
    <li className="flex m-2 justify-between" key={id}>
      <p className="inline-block align-middle">
        <Button type="click" label="🎼" onClick={clickHandler} />
        {title} - {artist}
      </p>
      <div className="flex">
      <img className="w-10" src={img} alt="album" />
      <Button type="click" label="Delete" onClick={deleteHandler} />
      </div>
    </li>
  );
};

export default TrackItem;
