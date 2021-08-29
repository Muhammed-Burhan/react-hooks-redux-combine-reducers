import { combineReducers } from "redux";
import bookReducer from "./features/books/books/booksSlice";
import authorReducer from "./features/books/authors/authorSlice";

const rootReducer = combineReducers({
  authors: authorReducer,
  books: bookReducer,
});

export default rootReducer;
