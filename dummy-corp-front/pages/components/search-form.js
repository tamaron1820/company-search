import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('AND');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange} placeholder="検索キーワード" />
      <select value={searchType} onChange={handleSearchTypeChange}>
        <option value="AND">AND検索</option>
        <option value="OR">OR検索</option>
      </select>
      <button type="submit">検索</button>
    </form>
  );
};

export default SearchForm;
