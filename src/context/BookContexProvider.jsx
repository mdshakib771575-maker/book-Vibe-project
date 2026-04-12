import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
 const BookContexProvider = ({children}) => {
 
     const [readListBook,setReadListBook] = useState([]);

     const [wishListBook,setWishListBook] = useState([]);

    const handalMarksasBook = (currentBook)=>{
      // console.log(currentBook);
      const isExistBook = readListBook.find(book => book.bookId === currentBook.bookId )
      if(isExistBook){
        toast.error(`${currentBook.bookName} is already existed`);
      }else{
        setReadListBook([...readListBook , currentBook ])
     
        toast.success(`${currentBook.bookName} is add to read list`);
      }
      
     };

     // wishListBook 
     const handalWishListBook =(currentBook)=>{
            const isExistInReadList = readListBook.find(book => book.bookId === currentBook.bookId)
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
      readListBook,
      setReadListBook,
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