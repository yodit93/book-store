import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <ul className="book-list">
    {books.map((book) => (
      <li className="list" key={book.id}>
        <h3 className="title">{book.title}</h3>
        <h5 className="author">{book.author}</h5>
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default BookList;
