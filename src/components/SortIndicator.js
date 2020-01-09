import React from "react";

const SortButton = ({ label, sortState, filter }) => {
  return <span className={label === filter ? sortState: 'sortable'} />;
}
export default SortButton;
