import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBookLists, removeList } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="list">
      <h3 className="title">{book.title}</h3>
      <h5 className="author">{book.author}</h5>
      <button
        type="button"
        className="remove"
        onClick={() => dispatch(removeList(book.item_id)).then(() => dispatch(getBookLists()))}
      >
        Remove
      </button>
    </li>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
