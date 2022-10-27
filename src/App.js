import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import GenresList from "./components/GenresList";
import Playlists from "./components/Playlists";
import TracksList from "./components/TracksList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <div className="flex-c justify-center align-middle m-auto">
        <TracksList />
        <Playlists />
        <GenresList />
      </div>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
