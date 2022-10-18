import './List_books.css'
import Book from "./Book";

function List_books({list}){
    return (
        <ol className="books-grid">
            {list.map(e=>
                <li key={e.id}>
                    <Book book={e}/>
                </li>
            )}
        </ol>
    )
}

export default List_books