import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="list">
      <div className="book-info">
        <span className="School-of">Fiction</span>
        <h3 className="title">{book.title}</h3>
        <h5 className="author">{book.author}</h5>
        <div className="btn-cont">
          <button type="button" className="comments btn">Comments</button>
          <div className="Line-2" />
          <button
            type="button"
            className="remove btn"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Remove
          </button>
          <div className="Line-2" />
          <button type="button" className="edit btn">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="Oval-2" />
        <div className="complete">
          <span className="-Percent-Complete">64%</span>
          <span className="Completed Text-Style-2">Completed</span>
        </div>
      </div>
      <div className="book-progress">
        <span className="Current-Chapter Text-Style-7">CURRENT CHAPTER</span>
        <span className="Current-Lesson Text-Style-4">Chapter 17</span>
        <div className="Rectangle-2">
          <span className="Update-progress">UPDATE PROGRESS</span>
        </div>
      </div>
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
