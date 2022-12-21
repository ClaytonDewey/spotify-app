import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ({ onRemove, playlistName, playListTracks, isRemoval }) => {
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <TrackList onRemove={onRemove} tracks={playListTracks} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
