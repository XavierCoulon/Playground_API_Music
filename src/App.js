import { Fragment } from "react";
import "./App.css";
import GenresList from "./components/GenresList";
import Playlists from "./components/Playlists";
import TracksList from "./components/TracksList";

function App() {
  return (
    <Fragment>
      <div className="App">
        <TracksList />
        <Playlists />
        <GenresList />
      </div>
    </Fragment>
  );
}

export default App;
