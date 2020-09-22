/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import '../App.css';

const BooksList = ({
  books, removeBook, changeFilter, filter,
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
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks().map(book => (
            <Book key={book.id} book={book} removeBook={removeBook} />
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
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});
export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
