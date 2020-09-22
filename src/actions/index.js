import { REMOVE_BOOK, CREATE_BOOK } from '../constant/ActionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});
