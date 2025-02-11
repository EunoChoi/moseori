import React from 'react';
import SearchTag from './SearchTag';
import SearchText from './SearchText';

const Search: React.FC = () => {
  return (
    <div>
      <SearchText></SearchText>
      <SearchTag></SearchTag>
    </div>
  );
};

export default Search;