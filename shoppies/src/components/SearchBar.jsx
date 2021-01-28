import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from '../hooks/useDebounce';
import './SearchBar.scss';


function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          placeholder="Search Movies to Nominate"
          name="nom-search"
          type="search"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}

export default SearchBar;
