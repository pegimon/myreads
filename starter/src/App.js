import "./App.css";
import * as BookApi from './BooksAPI'
import { useState , useEffect} from "react";
import List_books from "./Modules/List_books";
import Book from "./Modules/Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currently_reading , setCurrently_reading] = useState([])
  const [read , setRead] = useState([])
  const [want_to_read , setWant_to_read] = useState([])
  const [text,setText] = useState('');
  const getData=(e)=>{
    setText(e.target.value.trim());
  }
  useEffect( ()=>{
     const getAll =async ()=> {
       const res =await BookApi.getAll()
       setCurrently_reading(res.filter(e=>e.shelf==="currentlyReading"))
       setWant_to_read(res.filter(e=>e.shelf==="wantToRead"))
       setRead(res.filter(e=>e.shelf==="read"))
     }

     getAll();
  })
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={text}
                onChange={getData}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <List_books list={currently_reading}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <List_books list={want_to_read} />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <List_books list={read} />
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;