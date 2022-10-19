import React from "react";

const Track = ({ id, title, artist, mp3, img, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li key={id}>
      {title} - {artist} <audio controls src={mp3}></audio>
      <img style={{width: "150px"}} src={img} alt="album" />
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Track;
