import "./App.css";
import SearchBooks from "./Routees/SearchBooks";
import {Route,Routes} from 'react-router-dom'
import Shelves from "./Routees/Shelves";
import {useState} from "react";
function App() {
    const [category,setCategory] =useState('')

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Shelves param={category}/>}/>
        <Route path="/search" element={<SearchBooks param={setCategory}/>}/>
      </Routes>
    </div>
  );
}

export default App;