import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = ({ onAdd, searchResults, isRemoval }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList onAdd={onAdd} tracks={searchResults} isRemoval={isRemoval} />
    </div>
  );
};

export default SearchResults;
