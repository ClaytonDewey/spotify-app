import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ onAdd, onRemove, tracks, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track, idx) => {
        return (
          <Track
            key={idx}
            onAdd={onAdd}
            onRemove={onRemove}
            track={track}
            isRemoval={isRemoval}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
