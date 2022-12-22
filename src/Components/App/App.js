import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

Spotify.getAccessToken();

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [playListTracks, setPlayListTracks] = useState([]);

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
    Spotify.search(term).then((results) => setSearchResults(results));
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
