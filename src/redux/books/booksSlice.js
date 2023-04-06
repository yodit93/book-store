import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookLists: [],
  isLoading: false,
};
const appId = 'OUX30zIkASmffak9hkWd';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
export const getBookLists = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios(`${url}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return error;
  }
});
export const postBook = createAsyncThunk('books/postBook', async (book, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.post(`${url}/apps/${appId}/books`, book);
    return fulfillWithValue(response.data);
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const removeList = createAsyncThunk('books/postBook', async (id, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.delete(`${url}/apps/${appId}/books/${id}`);
    return fulfillWithValue(response.data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookLists.push(action.payload);
    },
    removeBook: (state, action) => ({
      bookLists: state.bookLists.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: {
    [getBookLists.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getBookLists.fulfilled]: (state, action) => {
      const lists = action.payload;
      const newBookLists = Object.keys(lists).map((key) => ({
        item_id: key,
        title: lists[key][0].title,
        author: lists[key][0].author,
        category: 'Nonfiction',
      }));
      return {
        ...state,
        isLoading: false,
        bookLists: newBookLists,
      };
    },
    [getBookLists.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
