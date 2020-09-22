import ACTIONTYPES from '../constant/ActionTypes';

export const createBook = book => ({
  type: ACTIONTYPES.CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: ACTIONTYPES.REMOVE_BOOK,
  id,
});
