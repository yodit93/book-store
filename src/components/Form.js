import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: '', author: '' });
  const handleChange = (e) => {
    setInputValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuid(),
      title: inputValue.title,
      author: inputValue.author,
      category: 'Nonfiction',
    }));
    setInputValue({
      title: '',
      author: '',
    });
  };
  return (
    <form className="form" id="book-form" onSubmit={handleSubmit}>
      <div className="Line" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="form-rapper">
        <input
          type="text"
          className="add-book"
          name="title"
          placeholder="BOOK TITLE"
          value={inputValue.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="category"
          name="author"
          placeholder="BOOK AUTHOR"
          value={inputValue.author}
          onChange={handleChange}
        />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
