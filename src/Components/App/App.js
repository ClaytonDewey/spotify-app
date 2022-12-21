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
      album: "Ride the Lightning",
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
      id: 4,
      name: "Lone Justice",
      artist: "Anthrax",
      album: "Spreading the Disease",
    },
    {
      id: 5,
      name: "Damage Inc.",
      artist: "Metallica",
      album: "Master of Puppets",
    },
    {
      id: 6,
      name: "Mechanix",
      artist: "Megadeth",
      album: "Killing Is My Business...And Business Is Good",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My awesome mix!");

  const addTrack = (track) => {
    if (playListTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlayListTracks([...playListTracks, track]);
  };

  const removeTrack = (track) => {
    setPlayListTracks(
      playListTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    console.log(playListTracks);
  };

  const search = (term) => {
    console.log(term);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults
            onAdd={addTrack}
            searchResults={searchResults}
            isRemoval={false}
          />
          <Playlist
            onSave={savePlaylist}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            playlistName={playlistName}
            playListTracks={playListTracks}
            isRemoval={true}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
