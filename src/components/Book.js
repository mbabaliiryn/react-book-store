/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>
      {' '}
      {book.id}
      {' '}
    </td>
    <td>
      {' '}
      {book.title}
      {' '}
    </td>
    <td>
      {' '}
      {book.category}
      {' '}
    </td>
    <td>
      <button type="button" onClick={() => removeBook(book.id)}>x</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({}).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
