/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { handleBookRemove } from '../actions';

const BooksList = ({ books, handleBookRemove }) => {
  return (
    <div>
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
            <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.shape([]).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});
export default connect(mapStateToProps, { handleBookRemove })(BooksList);
