import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} />
    </div>
  );
};

export default SearchResults;
