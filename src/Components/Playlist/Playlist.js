import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ({
  onRemove,
  onSave,
  playlistName,
  onNameChange,
  playListTracks,
  isRemoval,
}) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange} />
      <TrackList onRemove={onRemove} tracks={playListTracks} isRemoval={true} />
      <button onClick={onSave} className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
