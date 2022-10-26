import React, {useEffect, useState} from 'react';
import List_books from "../Modules/List_books";
import {Link} from "react-router-dom";
import * as BookApi from "../BooksAPI";

function Shelves({param}) {
    const [currently_reading , setCurrently_reading] = useState([])
    const [read , setRead] = useState([])
    const [want_to_read , setWant_to_read] = useState([])
    const [category,setCategory] = useState('')

    useEffect( ()=>{
        const getAll = async ()=> {
            const res = await BookApi.getAll()
            setCurrently_reading(res.filter(e => e.shelf === "currentlyReading"))
            setWant_to_read(res.filter(e => e.shelf === "wantToRead"))
            setRead(res.filter(e => e.shelf === "read"))
        }
        getAll()
        return ()=>{
        }
    },[category,param])
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <List_books list={currently_reading} param={setCategory}/>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <List_books list={want_to_read} param={setCategory}/>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <List_books list={read} param={setCategory}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>
        </div>
    );
}

export default Shelves;