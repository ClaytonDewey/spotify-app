import "./Track.css";

const Track = ({ onAdd, onRemove, track, isRemoval }) => {
  const renderAction = () => {
    return isRemoval ? (
      <button onClick={() => onRemove(track)} className="Track-action">
        {" "}
        -{" "}
      </button>
    ) : (
      <button onClick={() => onAdd(track)} className="Track-action">
        {" "}
        +{" "}
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
