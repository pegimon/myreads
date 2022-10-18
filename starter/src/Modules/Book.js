import './Book.css'
import * as BookApi from '../BooksAPI'
import {useEffect, useState} from "react";

function Book({book}){
    const [category,setCategory] = useState(book.shelf)
    useEffect(()=>{
        console.log(category)
       const update = async ()=>BookApi.update(book,category);
       update();
    })
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 'url('+book.imageLinks.thumbnail+')'
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={e=>setCategory(e.target.value)}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
        </div>
    )
}

export default Book