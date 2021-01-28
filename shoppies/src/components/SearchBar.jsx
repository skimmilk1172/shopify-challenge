import './SearchBar.scss';


function SearchBar ({ handleSearcBar }) {
  return (
    <div className="flex-row2">
    <div className="flex-row">
      <div className="search-icon">
      </div>
      <input
        className="bar"
        placeholder="Enter Movie Title"
        maxlength="50"
        onChange={(event) => handleSearchBar(event.target.value)}
      />
    </div>
  </div>
);
}

export default SearchBar;