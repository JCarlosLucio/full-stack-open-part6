import React from 'react';
import { connect } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = ({ target }) => {
    props.filterChange(target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input type="text" onChange={handleChange} />
    </div>
  );
};

export default connect(null, { filterChange })(Filter);
