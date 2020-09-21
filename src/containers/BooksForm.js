import React from 'react';
import categories from '../constant/category';

const BooksForm = () => (
  <div>
    <form>
      <div className="form-group">
        <label htmlFor="title" />
        <input type="text" placeholder="Enter title" />
      </div>
      <div className="form-group">
        <select name="category">
          { categories.map(category => (
            <option key={category} value={category}>
              { category }
            </option>
          ))}
        </select>
      </div>
      <input type="button" name="Add Book" value="Add Book" />
    </form>
  </div>
);

export default BooksForm;
