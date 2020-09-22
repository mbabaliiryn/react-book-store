/* eslint-disable no-unused-vars */
import { CREATE_BOOK, REMOVE_BOOK } from '../constant/ActionTypes';
import INITIAL_STATE from '../constant/initialState';

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};

export default books;
