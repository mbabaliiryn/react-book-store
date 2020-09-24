/* eslint-disable import/order */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { handleBookRemove, changeFilter } from '../actions';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/BooksList.css';

const BooksList = ({
  books, handleBookRemove, changeFilter, filter,
}) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredBooks = () => (filter === 'ALL' ? books : books.filter(book => book.category === filter));

  return (
    <div className="main w-75 m-auto border bg-light shadow-lg ">
      <div className="main-container card border-bottom ">
        <div className="d-flex justify-content-between p-4 text-primary">
          <div className="title"> Bookstore</div>
          <CategoryFilter handleChange={handleFilterChange} />
          <div className="image-container">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      {
      filteredBooks().map(book => (
        <Book
          key={book.id}
          book={book}
          handleBookRemove={handleBookRemove}
        />
      ))
}
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
