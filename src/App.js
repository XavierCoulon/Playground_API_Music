import { Fragment } from "react";
import "./App.css";
import GenresList from "./components/GenresList";
import Playlists from "./components/Playlists";
import TracksList from "./components/TracksList";

function App() {
  return (
    <Fragment>
      <div className="flex-c justify-center align-middle m-auto">
        <TracksList />
        <Playlists />
        <GenresList />
      </div>
    </Fragment>
  );
}

export default App;
