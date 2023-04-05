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
      <h2 className="form-title">Add New Book</h2>
      <div className="form-rapper">
        <input
          type="text"
          className="add-book"
          name="title"
          placeholder="Book title"
          value={inputValue.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="category"
          name="author"
          placeholder="Book author"
          value={inputValue.author}
          onChange={handleChange}
        />
        <button className="add-btn" type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
