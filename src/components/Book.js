/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleBookRemove }) => (

  <tr className=" card table-row rounded-0 w-75 ml-auto mr-auto mt-3 shadow-lg bg-white">
    <div className = "d-flex justify-content-between">
    <div className = "d-flex flex-column">
   <td>
    {' '}
    {book.category}
    {' '}
   </td>
    <td>
      {' '}
      {book.title}
      {' '}
    </td>
    </div>
    <div className= "">
    <td>
      <button type="button" onClick={() => handleBookRemove(book.id)}>x</button>
    </td>
    </div>
    </div>
  </tr>

);

Book.propTypes = {
  book: PropTypes.shape({}).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
