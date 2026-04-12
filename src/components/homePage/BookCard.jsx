import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BookCard = ({ book }) => {
    // console.log(book)
    return (
        <div className=''>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-xl mt-2 border border-gray-300">
            <div className='bg-gray-300 rounded-md'>
                <figure className=' p-6'>
                    <img src={book.image} alt={book.bookName} className='rounded-2xl h-60'/>
                </figure>
                </div>
                <div className="card-body ">
                       <div className='flex gap-2'>
                        {
                            book.tags.map((tag,index)=> <div key={index} className="badge bg-green-200 text-green-600 font-bold rounded-2xl">{tag}</div>)
                        }
                        </div>
                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='font-bold'>{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-500">
                        <div className="">{book.category}</div>
                        <div className="flex items-center gap-2">5.00 <FaRegStar /></div>
                    </div>
                </div> 
             </Link> 
           
        </div>
      
    );
};

export default BookCard;