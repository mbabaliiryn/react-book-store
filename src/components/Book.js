/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, handleBookRemove }) => (

  <tr className=" card table-row rounded-0 ml-auto mr-auto mt-3 shadow bg-white">
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column p-5">
        <td className="book-category">
          {' '}
          {book.category}
          {' '}
        </td>
        <td className="book-title pb-2">
          {' '}
          {book.title}
          {' '}
        </td>

        <ul className= "li-item d-flex flex-row">
        <li className="li-item border-right mr-2 pr-1 text-primary">Comments</li>
        <li className="li-item border-right mr-2 pr-1 text-primary" type = "button" onClick={() => handleBookRemove(book.id)}>Remove</li>
        <li className="li-item text-primary">Edit</li>
        </ul>

      </div>
      <div className="mt-5">
      <div className="radial-progress-bar progress-10 float-left">
      <div className="overlay"></div>
      </div>
      <div className="completed d-flex flex-column">
       <p className="percent"> 10% </p>
       <span className="update">Completed</span>
      </div>
      </div>
      <div>
        <td>
        <ul className= "li-item-1 d-flex flex-column mt-5">
        <li className ="current-chapter-one">CURRENT CHAPTER</li>
        <li className ="current-chapter">Chaper 6</li>
         </ul>
         <button className=" button bg-primary text-white" type="button" >Update Progress</button>
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
