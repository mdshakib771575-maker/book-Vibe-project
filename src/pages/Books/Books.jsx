import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContexProvider';

const Book = () => {
    
    
    const { storedBook, wishListBook } =  useContext(BookContext)
    console.log(storedBook)
    return (
        <div>
           <h2>Books</h2>
           <p>storedBook : {storedBook.length}</p>
           <p>WishListBook : {wishListBook.length}</p>
        </div>
    );
};

export default Book;