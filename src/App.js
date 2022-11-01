import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import GenresList from "./components/GenresList";
import TracksList from "./components/Tracks/TracksList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <div className="flex flex-col justify-center align-middle m-auto">
        <TracksList label="Tracks List" />
        <GenresList />
      </div>
      <ToastContainer autoClose={2000} />
    </Fragment>
  );
}

export default App;
