import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
 const BookContexProvider = ({children}) => {
 
     const [storedBook,setStoreBook] = useState([]);

     const [wishListBook,setWishListBook] = useState([]);

    const handalMarksasBook = (currentBook)=>{
      // console.log(currentBook);
      const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId )
      if(isExistBook){
        toast.error(`${currentBook.bookName} is already existed`);
      }else{
        setStoreBook([...storedBook , currentBook ])
     
        toast.success(`${currentBook.bookName} is add to read list`);
      }
      
     };

     // wishListBook 
     const handalWishListBook =(currentBook)=>{
            const isExistInReadList = storedBook.find(book => book.bookId === currentBook.bookId)
            if(isExistInReadList){
              toast.error(`${currentBook.bookName} is already in read list`)
              return;
            }


           const isExistWishBook = wishListBook.find(book => book.bookId === currentBook.bookId )
          if(isExistWishBook){
            toast.error(`${currentBook.bookName} is already existed`);
          }else{
            setWishListBook([...wishListBook , currentBook ])
         
            toast.success(`${currentBook.bookName} is add to wish list`);
          }

     }
    

    const data ={
      handalMarksasBook, 
      storedBook,
      setStoreBook,
      wishListBook,
      setWishListBook,
      handalWishListBook
    }
    return (
        <BookContext.Provider value={data}>
           { children}
            
        </BookContext.Provider>
    );
};

export default BookContexProvider;