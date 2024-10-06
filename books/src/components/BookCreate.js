import { useState, useContext } from "react";
import BooksContext from "../context/book";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
