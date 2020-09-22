import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleBookRemove } = props;

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
        <button type="button" onClick={() => handleBookRemove(book.id)}>x</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

  }).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
