import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  //   const handleClick = () => {
  //     onSubmit('car');
  //   };
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value.replace('/a-z/', '')); 
  }
  return ( 
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>: {term};
        <input value={term} onChange={handleChange} />
        {term.length < 3 && 'Term must be longer'}
      </form>

      {/* <button onClick={handleClick}></button> */}
    </div>
  );
}

export default SearchBar;
