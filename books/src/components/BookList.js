
import BookShow from "./BookShow";


import useBookContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBookContext();
  console.log(books);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div>{renderedBooks}</div>;
}

export default BookList;
