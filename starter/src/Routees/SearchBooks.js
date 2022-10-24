import {Link} from "react-router-dom";
import List_books from "../Modules/List_books";
import {useEffect, useState} from "react";
import * as BookApi from "../BooksAPI";

function SearchBooks({param}) {
    const [text,setText] = useState('');
    const [books , setBooks] = useState([])
    useEffect(()=>{
        const search = async ()=>{
            if (text==='')return
            const res = await BookApi.search(text,20)
            setBooks(res)
        }
        let value = setTimeout(search,1000)
        return ()=>{
            clearTimeout(value)
        }
    },[text])

    const getData=(e)=>{
        setText(e.target.value.trim());
    }
    return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >
                        Close
                    </Link>
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
                        {books.length>0?
                            <List_books list={books} param={param}/>:
                            <p>no books found</p>
                        }
                    </ol>
                </div>
            </div>
    )
}

export default SearchBooks;