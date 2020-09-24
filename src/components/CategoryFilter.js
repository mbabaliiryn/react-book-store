import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constant/category';

const CategoryFilter = ({ handleChange }) => (
  <div>
    <select name="category" className= "category-title" onChange={handleChange}>
      <option value="ALL">CATEGORIES</option>
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
