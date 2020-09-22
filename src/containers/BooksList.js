/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';

const BooksList = ({ books, removeBook, changeFilter, filter, }) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

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
          {books.map(book => (
            <Book key={book.id} book={book} removeBook={removeBook} />
          ))}
        </tbody>
      </table>
    </div>
  );

  BooksList.propTypes = {
    books: PropTypes.shape([]).isRequired,
    filter: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    books: state.books,
    filter: state.filter,
  });

  export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
