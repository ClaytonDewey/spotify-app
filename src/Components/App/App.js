import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Only",
      artist: "Anthrax",
      album: "Sound of White Noise",
    },
    {
      id: 2,
      name: "For Whom the Bell Tolls",
      artist: "Metallica",
      album: "Master of Puppets",
    },
    {
      id: 3,
      name: "The Conjuring",
      artist: "Megadeth",
      album: "Peace Sells...but Who's Buying?",
    },
  ]);

  const [playListTracks, setPlayListTracks] = useState([
    {
      id: 1,
      name: "Only",
      artist: "Anthrax",
      album: "Sound of White Noise",
    },
    {
      id: 2,
      name: "For Whom the Bell Tolls",
      artist: "Metallica",
      album: "Master of Puppets",
    },
    {
      id: 3,
      name: "The Conjuring",
      artist: "Megadeth",
      album: "Peace Sells...but Who's Buying?",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My awesome mix!");

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist
            playlistName={playlistName}
            playListTracks={playListTracks}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
