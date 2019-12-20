import React from 'react';

const FilterByGender = ({filters, onChange}) =>
  <select onChange={onChange} className="form-control form-control-sm">
    <option value='all'>All genders</option>
    {filters.map(filter => (
      <option key={filter} value={filter}>
        {filter}
      </option>
    ))}
  </select>


export default  FilterByGender;