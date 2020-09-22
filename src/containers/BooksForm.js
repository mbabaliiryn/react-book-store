/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from '../constant/category';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" />
            <input
              type="text"
              onChange={this.handleChange}
              value={title}
              name="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <select name="category" value={category} onChange={this.handleChange} id="category">
              { categories.map(category => (
                <option key={category}>
                  { category }
                </option>
              ))}
            </select>
          </div>
          <input type="submit" name="Add Book" value="Add Book" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, { createBook })(BooksForm);
