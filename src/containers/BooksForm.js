/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from '../constant/category';
import '../styles/BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const newBook = {
      id: uuidv1(),
      title,
      category,
    };
    if (title && category) {
      createBook(newBook);

      this.setState({
        title: '',
        category: '',
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form ml-auto w-75 border mr-auto pb-5 bg-light">
        <h1 className="add-book mt-1 pt-5 ml-4">ADD NEW BOOK</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-between">
            <div className="form-group">
              <label htmlFor="title" />
              <input
                type="text"
                onChange={this.handleChange}
                value={title}
                name="title"
                placeholder="Book title"
                className=" enter-title mt-3 ml-3"
              />
            </div>
            <div className="">

              <select className="border mt-3 category-bottom p-1" name="category" value={category} onChange={this.handleChange} id="category">

                <option value="ALL">CATEGORY</option>
                { categories.map(category => (
                  <option key={category} value={category}>
                    { category }
                  </option>
                ))}
              </select>
            </div>
            <input className="button mt-3 bg-primary text-white h-25 mr-2" type="submit" name="Add Book" value="Add Book" />
          </div>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, { createBook })(BooksForm);
