import React from 'react';

const Filter = ({ filter, onFilterChange }) => (
  <label>
    Find contact by name:
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
    />
  </label>
);

export default Filter;
