import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constant/category';

const CategoryFilter = ({ handleChange }) => (
  <div>
    <select name="category" onChange={handleChange}>
      <option value="ALL">ALL</option>
      { categories.map(category => (
        <option key={category} value={category}>
          { category }
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
