import { REMOVE_BOOK, CREATE_BOOK, CHANGE_FILTER } from '../constant/ActionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const handleBookRemove = id => ({
  type: REMOVE_BOOK,
  id,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
