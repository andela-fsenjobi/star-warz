import React from 'react';

const FilterByGender = ({filters, onChange}) =>
  <select onChange={onChange}>
    <option value='all'>Filter by Gender</option>
    {filters.map(filter => (
      <option key={filter} value={filter}>
        {filter}
      </option>
    ))}
  </select>


export default  FilterByGender;