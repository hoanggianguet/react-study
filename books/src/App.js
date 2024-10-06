import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BooksContext from "./context/book";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  // fetchBooks();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
