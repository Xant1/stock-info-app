import React from 'react';

const Filter = ({ sortSelect, setSortSelect }) => {
  return (
    <input
      type='text'
      placeholder='search ticker'
      value={sortSelect}
      onChange={(e) => setSortSelect(e.target.value)}
    />
  );
};

export default Filter;
