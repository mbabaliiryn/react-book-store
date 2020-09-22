const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        books,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state,
        state.books.filter(
          book => book.id !== action.payload,
        ),
      ];
    default:
      return state;
  }
};

export default books;
