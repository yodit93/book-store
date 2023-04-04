import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';

export default configureStore({
  reducer: {
    books: booksSlice,
  },
});
