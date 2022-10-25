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
    <li style={{ listStyleType: "none" }} key={id}>
      <div>
        <span style={{ cursor: "pointer" }} onClick={clickHandler}>
          &#9654;
        </span>{" "}
        {title} - {artist}
      </div>
      <img src={img} alt="album" />
      <Button type="click" label="Delete" onClick={deleteHandler} />
    </li>
  );
};

export default TrackItem;
