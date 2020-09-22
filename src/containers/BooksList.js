/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { handleBookRemove, changeFilter } from '../actions';

const BooksList = ({
  books, handleBookRemove, changeFilter, filter,
}) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredBooks = () => (filter === 'ALL' ? books : books.filter(book => book.category === filter));

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks().map(book => (
            <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.shape([]).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});
export default connect(mapStateToProps, { handleBookRemove, changeFilter })(BooksList);
