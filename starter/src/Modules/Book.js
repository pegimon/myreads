import './Book.css'
import * as BookApi from '../BooksAPI'
import {useEffect, useState} from "react";


function Book({book,param}){
    const [category,setCategory] = useState(book.shelf)
    const fun = (e)=>{
        setCategory(e.target.value)
        param(e.target.value)
    }
    const update = async ()=>await BookApi.update(book,category);

    useEffect(()=>{
       try {
           update();
       }catch (err){
           console.log("error")
       }
       return ()=>{

       }

    },[category])
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
                    <select value={"none"} onChange={e=>fun(e)}>
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