import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return <Track key={track.id} track={track} />;
      })}
    </div>
  );
};

export default TrackList;
