import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { storage } from "../../utils/localStorageTools";

const TrackItem = ({
  id,
  title,
  artist,
  mp3,
  img,
  onDelete,
  onClick,
  onPlaylist,
  favorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (storage.get("favorite") && storage.get("favorite").includes(id))
      setIsFavorite(true);
  }, [id]);

  const handleClickFavorite = () => {
    isFavorite ? storage.remove("favorite", id) : storage.set("favorite", id);

    setIsFavorite((state) => !state);
  };

  const deleteHandler = () => {
    onDelete(id);
  };

  const clickHandler = () => {
    onClick(mp3);
  };

  const playlistHandler = (id) => {
    onPlaylist(id);
  };

  return (
    <div>
      <li className="flex m-2 justify-between" key={id}>
        <p className="inline-block align-middle">
          <Button type="click" label="🎼" onClick={clickHandler} />
          {title} - {artist}
        </p>
        <div className="flex">
          <img className="w-10" src={img} alt="album" />
          <div
            className={
              "w-8 h-8 bg-[size:100%] " +
              (isFavorite
                ? "bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg')]"
                : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg')]")
            }
            onClick={handleClickFavorite}
          ></div>
          <Button type="click" label="Delete" onClick={deleteHandler} />
          <Button
            type="click"
            label="Add to playlist"
            onClick={() => playlistHandler(id)}
          />
        </div>
      </li>
    </div>
  );
};

export default TrackItem;
