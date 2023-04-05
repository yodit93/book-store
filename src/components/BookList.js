import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const { bookLists } = useSelector((store) => store.books);
  return (
    <ul className="book-list">
      {bookLists.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
