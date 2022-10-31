import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import GenresList from "./components/GenresList";
import TracksList from "./components/TracksList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <div className="flex-c justify-center align-middle m-auto">
        <TracksList />
        <GenresList />
      </div>
      <ToastContainer autoClose={2000} />
    </Fragment>
  );
}

export default App;
