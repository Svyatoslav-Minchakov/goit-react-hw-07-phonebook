import React from 'react';
export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
