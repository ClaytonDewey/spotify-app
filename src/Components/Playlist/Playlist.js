import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ({ playlistName, playListTracks, isRemoval }) => {
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <TrackList tracks={playListTracks} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
