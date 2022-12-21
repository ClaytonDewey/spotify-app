import "./Track.css";

const Track = () => {
  // const renderAction = () => {
  //   return isRemoval ? "-" : "+";
  // };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className="Track-action">+/-</button>
    </div>
  );
};

export default Track;
