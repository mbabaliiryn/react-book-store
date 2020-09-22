/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {

  const { book, removeBook } = props;

  const handleBookRemove = () => removeBook(book.id);

  return (
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
};

Book.propTypes = {
  book: PropTypes.shape({}).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
