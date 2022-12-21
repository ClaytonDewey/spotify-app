import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ({ playlistName, playListTracks }) => {
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <TrackList tracks={playListTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
