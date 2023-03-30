import BookList from './BookList';
import Form from './Form';

const Books = () => {
  const books = [
    { title: 'Oromay', author: 'Bealu Girma', id: '1' },
    { title: 'Oromay', author: 'Bealu Girma', id: '2' },
    { title: 'Oromay', author: 'Bealu Girma', id: '3' },
    { title: 'Oromay', author: 'Bealu Girma', id: '4' },
  ];
  return (
    <>
      <BookList books={books} />
      <Form />
    </>
  );
};

export default Books;
