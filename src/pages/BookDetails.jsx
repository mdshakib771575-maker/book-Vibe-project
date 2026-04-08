import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();

    const books = useLoaderData()
    console.log("books",books)
    // console.log(id)
    const expecteBook= books.find((book)=> book.bookId === Number(id))

    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expecteBook;
    // console.log(expecteBook)

    const [storedBook,setStoreBook] = useState([]);
    const handalMarksasBook = (currentBook)=>{
      console.log(currentBook);
      const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId )
      if(isExistBook){
        alert("This Book is already existed")
      }else{
        setStoreBook([...storedBook , currentBook ])
      }

    }
    return (
        <div>
           <div className="grid grid-cols-2 bg-base-100 shadow-sm w-11/12 mx-auto gap-4 ">
  <figure className='flex justify-center items-center bg-gray-100 rounded-xl'>
    <img src={image} alt={bookName} className='h-[300px] '/>
  </figure>
  <div className="card-body space-y-2">
    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
    <h2 className="card-title font-bold"> BY: {author}</h2>
    <p className='border-y font-bold py-4 text-xl'>{category}</p>
    <p>Review: {review}</p>
    <div className='flex items-center gap-2'>
    {
    tags.map((tag,index)=> <div key={index} className="badge bg-green-200 text-green-600 font-bold rounded-2xl">{tag}</div>)                 
    }
    </div>
    <div className="card-actions border-t flex-col mt-3 pt-5 space-y-2">
      <div  className='flex justify-between items-center  gap-10'>
        <span>Number of pages :</span> <span className='font-bold'>{totalPages}</span>
      </div>
      <div  className='flex justify-between items-center  gap-23'>
        <span>publisher :</span> <span className='font-bold'>{publisher}</span>
      </div>
      <div className='flex justify-between items-center  gap-18'>
        <span>publish time : </span> <span className='font-bold'>{yearOfPublishing}</span>
      </div>
      <div className='flex justify-between items-center  gap-27'>
        <span>Ratting :</span> <span className='font-bold'>{rating}</span>
      </div>
       <div className='flex gap-5'>
      <button onClick={()=>handalMarksasBook(expecteBook)} className="btn bg-white border border-sky-400">Mark as Read</button>
      <button className="btn btn-info text-white">WishList</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;