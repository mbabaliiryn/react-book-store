/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/book.css';

const Book = ({ book, handleBookRemove }) => (

  <tr className=" card table-row rounded-0 w-75 ml-auto mr-auto mt-3 shadow-lg bg-white">
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column p-5">
        <td>
          {' '}
          {book.category}
          {' '}
        </td>
        <td className="book-title">
          {' '}
          {book.title}
          {' '}
        </td>
      </div>
      <div className="">
        <td>
          <button className=" button mt-5 mr-5 bg-primary text-white" type="button" onClick={() => handleBookRemove(book.id)}>Delete book</button>
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
