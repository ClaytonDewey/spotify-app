import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ onAdd, tracks, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track, idx) => {
        return (
          <Track key={idx} onAdd={onAdd} track={track} isRemoval={isRemoval} />
        );
      })}
    </div>
  );
};

export default TrackList;
